<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let animationFrame = 0;
    let isAnimating = false;

    const PX_PER_CM = 96 / 2.54;
    const DOT_DIAMETER_CM = 0.12;
    const GRID_SPACING_CM = 1.0;
    const HOVER_RADIUS_CM = 2.5;
    const FADE_PER_FRAME = 0.94;
    const MIN_GLOW = 0.001;

    const BACKGROUND_COLOR = "rgb(249, 248, 247)";
    const DOT_COLOR = "rgb(232, 229, 229)";
    const HOVER_COLOR = "#ff69b4";

    let dpr = 1;
    let cssWidth = 0;
    let cssHeight = 0;
    let dotRadiusPx = 0;
    let spacingPx = 0;
    let hoverRadiusPx = 0;
    let hoverRadiusSquared = 0;
    let cols = 0;
    let rows = 0;

    let dotX = new Float32Array(0);
    let dotY = new Float32Array(0);
    let glow = new Float32Array(0);
    const activeDots = new Set<number>();

    let baseCanvas: HTMLCanvasElement | null = null;

    // Mouse in *document* coordinates (top-left of page = 0,0)
    let mouseX = -Infinity;
    let mouseY = -Infinity;
    let prevMouseX = -Infinity;
    let prevMouseY = -Infinity;
    let mouseInside = false;
    let mouseMoved = false;

    function ensureAnimation() {
        if (isAnimating) return;
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(renderFrame);
    }

    function stopAnimation() {
        if (!isAnimating) return;
        window.cancelAnimationFrame(animationFrame);
        isAnimating = false;
    }

    function indexAt(row: number, col: number) {
        return row * cols + col;
    }

    function getDocSize() {
        const el = document.documentElement;
        const body = document.body;

        const width = Math.max(
            el.clientWidth,
            el.scrollWidth,
            body?.scrollWidth ?? 0,
        );

        const height = Math.max(
            el.clientHeight,
            el.scrollHeight,
            body?.scrollHeight ?? 0,
        );

        return { width, height };
    }

    function rebuildGrid() {
        if (!ctx) return;

        dpr = window.devicePixelRatio || 1;

        const { width, height } = getDocSize();
        cssWidth = width;
        cssHeight = height;

        // Ensure the canvas element itself spans the whole document in CSS pixels
        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${cssHeight}px`;

        // Backing store in device pixels
        canvas.width = Math.floor(cssWidth * dpr);
        canvas.height = Math.floor(cssHeight * dpr);

        // Draw in CSS pixel coordinates
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        dotRadiusPx = (DOT_DIAMETER_CM * PX_PER_CM) / 2;
        spacingPx = GRID_SPACING_CM * PX_PER_CM;
        hoverRadiusPx = HOVER_RADIUS_CM * PX_PER_CM;
        hoverRadiusSquared = hoverRadiusPx * hoverRadiusPx;

        cols = Math.max(
            0,
            Math.floor((cssWidth - dotRadiusPx * 2) / spacingPx) + 1,
        );
        rows = Math.max(
            0,
            Math.floor((cssHeight - dotRadiusPx * 2) / spacingPx) + 1,
        );
        const total = cols * rows;

        dotX = new Float32Array(total);
        dotY = new Float32Array(total);
        glow = new Float32Array(total);
        activeDots.clear();

        let i = 0;
        for (let row = 0; row < rows; row += 1) {
            const y = dotRadiusPx + row * spacingPx;
            for (let col = 0; col < cols; col += 1) {
                dotX[i] = dotRadiusPx + col * spacingPx;
                dotY[i] = y;
                i += 1;
            }
        }

        // Pre-render the base background to an offscreen canvas
        baseCanvas = document.createElement("canvas");
        baseCanvas.width = canvas.width;
        baseCanvas.height = canvas.height;

        const baseCtx = baseCanvas.getContext("2d");
        if (!baseCtx) return;

        baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        baseCtx.clearRect(0, 0, cssWidth, cssHeight);
        baseCtx.fillStyle = BACKGROUND_COLOR;
        baseCtx.fillRect(0, 0, cssWidth, cssHeight);
        baseCtx.fillStyle = DOT_COLOR;

        for (let j = 0; j < total; j += 1) {
            baseCtx.beginPath();
            baseCtx.arc(dotX[j], dotY[j], dotRadiusPx, 0, Math.PI * 2);
            baseCtx.fill();
        }

        // Draw base once immediately
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.drawImage(baseCanvas, 0, 0, cssWidth, cssHeight);
    }

    function applyMouseInfluence() {
        if (!mouseInside || cols === 0 || rows === 0) return;

        const startX = mouseMoved ? prevMouseX : mouseX;
        const startY = mouseMoved ? prevMouseY : mouseY;
        const endX = mouseX;
        const endY = mouseY;

        const minX = Math.min(startX, endX) - hoverRadiusPx;
        const maxX = Math.max(startX, endX) + hoverRadiusPx;
        const minY = Math.min(startY, endY) - hoverRadiusPx;
        const maxY = Math.max(startY, endY) + hoverRadiusPx;

        const minCol = Math.max(
            0,
            Math.floor((minX - dotRadiusPx) / spacingPx),
        );
        const maxCol = Math.min(
            cols - 1,
            Math.ceil((maxX - dotRadiusPx) / spacingPx),
        );
        const minRow = Math.max(
            0,
            Math.floor((minY - dotRadiusPx) / spacingPx),
        );
        const maxRow = Math.min(
            rows - 1,
            Math.ceil((maxY - dotRadiusPx) / spacingPx),
        );

        const segDx = endX - startX;
        const segDy = endY - startY;
        const segLenSquared = segDx * segDx + segDy * segDy;

        for (let row = minRow; row <= maxRow; row += 1) {
            for (let col = minCol; col <= maxCol; col += 1) {
                const i = indexAt(row, col);
                const px = dotX[i];
                const py = dotY[i];

                let closestX = endX;
                let closestY = endY;

                if (segLenSquared > 0) {
                    const t = Math.max(
                        0,
                        Math.min(
                            1,
                            ((px - startX) * segDx + (py - startY) * segDy) /
                                segLenSquared,
                        ),
                    );
                    closestX = startX + t * segDx;
                    closestY = startY + t * segDy;
                }

                const dx = px - closestX;
                const dy = py - closestY;
                const distanceSquared = dx * dx + dy * dy;

                if (distanceSquared > hoverRadiusSquared) continue;

                const boost = 1 - Math.sqrt(distanceSquared) / hoverRadiusPx;
                if (boost > glow[i]) {
                    glow[i] = boost;
                    activeDots.add(i);
                }
            }
        }

        mouseMoved = false;
    }

    function renderFrame() {
        if (!ctx || !baseCanvas) {
            isAnimating = false;
            return;
        }

        ctx.clearRect(0, 0, cssWidth, cssHeight);
        ctx.drawImage(baseCanvas, 0, 0, cssWidth, cssHeight);

        applyMouseInfluence();

        ctx.fillStyle = HOVER_COLOR;
        for (const i of activeDots) {
            glow[i] *= FADE_PER_FRAME;
            if (glow[i] < MIN_GLOW) {
                glow[i] = 0;
                activeDots.delete(i);
                continue;
            }

            ctx.globalAlpha = glow[i];
            ctx.beginPath();
            ctx.arc(dotX[i], dotY[i], dotRadiusPx, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        if (!mouseInside && activeDots.size === 0) {
            isAnimating = false;
            return;
        }

        animationFrame = window.requestAnimationFrame(renderFrame);
    }

    onMount(() => {
        ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Throttle doc-size rebuilds (scroll / DOM changes can be frequent)
        let lastW = 0;
        let lastH = 0;
        let resizeScheduled = false;

        const scheduleDocResize = () => {
            if (resizeScheduled) return;
            resizeScheduled = true;
            requestAnimationFrame(() => {
                resizeScheduled = false;
                const { width, height } = getDocSize();
                if (width !== lastW || height !== lastH) {
                    lastW = width;
                    lastH = height;
                    rebuildGrid();
                    if (mouseInside || activeDots.size > 0) ensureAnimation();
                }
            });
        };

        // Initial build
        const initSize = getDocSize();
        lastW = initSize.width;
        lastH = initSize.height;
        rebuildGrid();

        const onResize = () => {
            scheduleDocResize();
        };

        const onScroll = () => {
            // Page height can change when sticky headers collapse, lazy content loads, etc.
            scheduleDocResize();
        };

        const onPointerMove = (event: PointerEvent) => {
            // Convert viewport coords -> document coords
            const x = event.clientX + window.scrollX;
            const y = event.clientY + window.scrollY;

            if (mouseInside) {
                prevMouseX = mouseX;
                prevMouseY = mouseY;
            } else {
                prevMouseX = x;
                prevMouseY = y;
            }

            mouseX = x;
            mouseY = y;
            mouseMoved = true;
            mouseInside = true;

            // If content grew, catch up
            scheduleDocResize();
            ensureAnimation();
        };

        const onBlur = () => {
            mouseInside = false;
            mouseX = -Infinity;
            mouseY = -Infinity;
            prevMouseX = -Infinity;
            prevMouseY = -Infinity;
            mouseMoved = false;
            if (activeDots.size > 0) ensureAnimation();
        };

        window.addEventListener("resize", onResize, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("pointermove", onPointerMove, {
            passive: true,
        });
        window.addEventListener("blur", onBlur);

        // Watch DOM changes that might affect document height (route changes, accordions, async content, etc.)
        const mo = new MutationObserver(() => scheduleDocResize());
        mo.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        return () => {
            stopAnimation();
            mo.disconnect();
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("blur", onBlur);
            ctx = null;
        };
    });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        position: absolute;
        top: 0;
        left: 0;

        /* JS sets exact pixel size; these keep it “stretchy” in layout terms */
        width: 100%;
        height: 100%;

        z-index: -1;
        pointer-events: none;
    }
</style>

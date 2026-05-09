<script lang="ts">
    import init, { main_web } from "./web";

    document.addEventListener("contextmenu", (event) => event.preventDefault());

    let container: HTMLElement | undefined = $state();
    let started = false;

    function removeAll() {
        for (const canvas of document.getElementsByTagName("canvas")) {
            canvas.remove();
        }
    }

    async function boot() {
        if (started) return;
        started = true;

        await init();
        await main_web();
    }

    $effect(() => {
        if (!container) return;
        boot();
        return removeAll;
    });
</script>

<div class="project-page flower-garden-page">
    <div class="layout">
        <header id="overview" class="project-header">
            <h2 class="project-title">Flower Garden</h2>
            <p class="project-description">
                A Project created to learn Rust and Nannou.
            </p>
        </header>

        <div class="project-sections">
            <section id="simulation" class="project-section">
                <div class="section-body">
                    <span bind:this={container} style="display:none;"></span>
                </div>
            </section>
        </div>
    </div>
</div>

<style>
    :global(body:has(.flower-garden-page)) {
        overflow: hidden;
    }

    .project-page {
        min-height: 100svh;
        padding-block: 1.25rem 0;
    }

    .layout {
        gap: 1rem;
    }

    .project-header {
        position: relative;
        z-index: 2;
        align-items: center;
        gap: 0.35rem;
        text-align: center;
        pointer-events: none;
    }

    .project-description {
        margin: 0;
    }

    .project-sections,
    .project-section,
    .section-body {
        display: contents;
    }

    :global(canvas) {
        position: fixed;
        top: calc(var(--header-height) + 7.5rem);
        left: 50%;
        z-index: 1;
        display: block;
        width: auto !important;
        height: auto !important;
        max-width: 90vw;
        max-height: calc(100svh - var(--header-height) - 8.5rem);
        margin: 0;
        cursor: none;
        transform: translateX(-50%);
    }
</style>

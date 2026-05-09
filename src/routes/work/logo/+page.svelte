<script lang="ts">
    const wh = { x: 100, y: 100 };
    let v = $state(0);

    let p = $state({ x: 0, y: 30 });
</script>

<div class="bg-background flex flex-col">
    <input type="range" bind:value={p.x} min="-50" max="50" step="1" />
    <input type="range" bind:value={p.y} min="-50" max="50" step="1" />
    <svg
        viewBox="-50 -50 100 100"
        class="h-auto w-[min(80vw,700px)]"
        style="stroke: var(--accent-foreground); stroke-linecap: butt;"
    >
        {#each [...Array(11).keys()] as i}
            {@const v = (i - 5) / 10}
            <line
                stroke-width={0.2}
                stroke={v === 0 ? "Black" : "DimGray"}
                y1={-wh.y / 2}
                y2={-wh.y / 2 + wh.y}
                x1={v * wh.x}
                x2={v * wh.y}
            />
            <line
                stroke-width={0.2}
                stroke={v === 0 ? "Black" : "DimGray"}
                y1={v * wh.y}
                y2={v * wh.y}
                x1={-wh.x / 2}
                x2={-wh.x / 2 + wh.x}
            />
        {/each}

        <!-- <path
            d="
                M 0 -40
                L 0 20
                L -10 30
                L -20 30
                L -30 20
                L -30 0

             
                M -15 -40
                L 20 -40
                L 30 -30
                L 30 -10
                L 20 0
                L 0 0
            "
            stroke-linecap="round"
            stroke-width="10"
            stroke="orange"
            fill="none"
            stroke-dasharray="0, {100 * v}"
            stroke-dashoffset="0"
        /> -->

        <path
            d="
                M 0 -40
                L 0 20
                Q {p.x} {p.y}
                  -10 30
                L -20 30

                L -30 20
                L -30 0

             
                // M -15 -40
                // L 20 -40
                // L 30 -30
                // L 30 -10
                // L 20 0
                // L 0 0
            "
            stroke-linecap="round"
            stroke-width="10"
            stroke="orange"
            fill="none"
            stroke-dasharray="0, {100 * v}"
            stroke-dashoffset="0"
        />

        <!-- <ellipse rx="1" ry="1" cx="-20" cy="-40" fill="red" stroke="none" />
        <ellipse rx="1" ry="1" cx="0" cy="-40" fill="red" stroke="none" />

        <ellipse rx="1" ry="1" cx="20" cy="-40" fill="blue" stroke="none" />
        <ellipse rx="1" ry="1" cx="30" cy="-30" fill="blue" stroke="none" />
        <ellipse rx="1" ry="1" cx="30" cy="-10" fill="blue" stroke="none" />
        <ellipse rx="1" ry="1" cx="20" cy="0" fill="blue" stroke="none" />

        <ellipse rx="1" ry="1" cx="0" cy="20" fill="green" stroke="none" />
        <ellipse rx="1" ry="1" cx="-10" cy="30" fill="green" stroke="none" />
        <ellipse rx="1" ry="1" cx="-30" cy="30" fill="green" stroke="none" />
        <ellipse rx="1" ry="1" cx="-40" cy="20" fill="green" stroke="none" />

        <ellipse rx="1" ry="1" cx="{p.x}" cy="{p.y}" fill="hotpink" stroke="none" /> -->
    </svg>
</div>

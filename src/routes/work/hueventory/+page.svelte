<!-- Todo: -->
<!--    - fun charts to display colours owned and colour percentage of colour categories owned -->
<!--    - colour opacity is lowered and a tick appears in the bottom right for owned colours -->
<!--    - add progress bars for the stats -->

<script lang="ts">
    import ColourSwatch from "./ColourSwatch.svelte";
    import { onMount } from "svelte";
    import { colourInfo, loadColours } from "./loadColours.svelte.js";
    import { ownedColours } from "./ownedColours.svelte.js";

    onMount(() => {
        loadColours().catch((e) => console.error("Failed to load colours", e));
    });

    const categories = $derived(
        Array.from(new Set(colourInfo.data.map((c) => c.category))),
    );
    const totalColours = $derived(colourInfo.data.length);
    const totalOwned = $derived(
        colourInfo.data.filter((c) => ownedColours.data.has(c.hex)).length,
    );

    // const ownedPercentage = $derived(
    //     totalColours ? (totalOwned / totalColours) * 100 : 0,
    // );

    const categoryStats = $derived.by(() => {
        return categories.map((category) => {
            const coloursInCategory = colourInfo.data.filter(
                (c) => c.category === category,
            ).length;

            const ownedInCategory = colourInfo.data.filter(
                (c) => c.category === category && ownedColours.data.has(c.hex),
            ).length;

            return {
                category,
                owned: ownedInCategory,
                total: coloursInCategory,
                percent: coloursInCategory
                    ? (ownedInCategory / coloursInCategory) * 100
                    : 0,
            };
        });
    });

    function sectionId(label: string) {
        return label
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }
</script>

<div class="project-page">
    <div class="layout">
        <header id="overview" class="project-header">
            <p class="project-type">Colour Swatch Tracker</p>
            <h1 class="project-title">Hueventory</h1>
            <p class="project-description">
                A personal tracker for my little sister's colour swatch
                collection, designed to make progress visible at a glance.
            </p>
        </header>

        <div class="project-sections">
            {#each categoryStats as stat}
                <section
                    class="project-section colour-category"
                    id={sectionId(stat.category)}
                >
                    <div class="section-header">
                        <h2 class="section-heading">{stat.category}</h2>
                    </div>

                    <div class="section-body">
                        <p class="stat-text">
                            {stat.owned}/{stat.total} owned
                        </p>

                        <div class="progress-bar">
                            <div
                                class="progress-fill"
                                style={`width: ${stat.percent}%`}
                            ></div>
                        </div>

                        <div class="swatch-group">
                            {#each colourInfo.data.filter((c) => c.category === stat.category) as colour}
                                <ColourSwatch
                                    {colour}
                                    isOwned={ownedColours.data.has(colour.hex)}
                                />
                            {/each}
                        </div>
                    </div>
                </section>
            {/each}
        </div>
    </div>

    <nav class="page-contents" aria-label="Contents">
        <div class="page-contents-tab">Contents</div>
        <ul>
            <li>
                <a href="#overview">Overview</a>
            </li>
            {#each categories as category}
                <!-- {@const colours = colourInfo.data.filter((c) => c.category === category)} -->
                <li>
                    <a href={"#" + sectionId(category)}>
                        {category}
                    </a>
                    <!-- <br />
                    <div class="grid-cols-{colours.length} w-full h-5">
                        {#each colours as colour}
                            <div class="w-full h-full text-[{colour.hex}] block">&nbsp;</div>
                        {/each}
                    </div> -->
                </li> 
            {/each}
        </ul>
    </nav>
</div>

<style>
    .colour-category {
        padding-top: 0;
        border-top: 0;
    }

    .progress-bar {
        height: 4px;
        background: #e5e5e5;
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .progress-fill {
        height: 100%;
        background: #111;
        transition: width 0.4s ease;
    }

    .stat-text {
        margin: 0;
        font-family: var(--font-mono);
        font-size: var(--text-xs);
    }

    .swatch-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 1rem;
    }
</style>

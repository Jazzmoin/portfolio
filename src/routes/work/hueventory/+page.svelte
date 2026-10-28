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
            <h2 class="project-title">Hueventory</h2>
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
                        <h3 class="section-heading">{stat.category}</h3>
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

    .section-header {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .section-heading {
        margin: 0;
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
        grid-template-columns: repeat(auto-fill, minmax(min(110px, 100%), 1fr));
        gap: 1rem;
    }

    .page-contents {
        position: fixed;
        top: calc(var(--header-height) + 2rem);
        right: 0;
        z-index: 5;
        display: flex;
        align-items: stretch;
        transform: translateX(calc(100% - 2.8rem));
        transition: transform 180ms ease;
    }

    .page-contents:hover,
    .page-contents:focus-within {
        transform: translateX(0);
    }

    .page-contents-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 0.6rem;
        border: 1px solid color-mix(in srgb, var(--color-text) 16%, transparent);
        border-right: 0;
        border-radius: 0;
        background: color-mix(
            in srgb,
            var(--color-accent-2) 72%,
            var(--color-background)
        );
        font-family: var(--font-sans);
        font-size: var(--body);
        line-height: 1.2;
        letter-spacing: 0.08em;
        writing-mode: vertical-rl;
    }

    .page-contents ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 12rem;
        margin: 0;
        padding: 0.9rem 1rem;
        list-style: none;
        border: 1px solid color-mix(in srgb, var(--color-text) 16%, transparent);
        border-right: 0;
        border-radius: 0;
        background: color-mix(in srgb, var(--color-background) 96%, white);
        box-shadow: 0 0.8rem 2rem
            color-mix(in srgb, var(--color-text) 12%, transparent);
    }

    .page-contents li {
        font-family: var(--font-sans);
        font-size: var(--body);
        line-height: 1.4;
        text-transform: none;
    }

    @media (max-width: 1280px) {
        .page-contents ul {
            min-width: 11rem;
        }
    }

    @media (max-width: 1024px) {
        .page-contents ul {
            min-width: 10rem;
        }
    }

    @media (max-width: 800px) {
        .page-contents {
            top: auto;
            bottom: 1rem;
            transform: translateX(calc(100% - 2.5rem));
        }

        .page-contents ul {
            max-height: min(55vh, 18rem);
            overflow: auto;
        }
    }
</style>

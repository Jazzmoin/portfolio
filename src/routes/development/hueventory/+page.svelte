<!-- Todo: -->
<!--    - fun charts to display colours owned and colour percentage of colour categories owned -->
<!--    - colour opacity is lowered and a tick appears in the bottom right for owned colours -->
<!--    - add progress bars for the stats -->

<script lang="ts">
    import ColourSwatch from "./ColourSwatch.svelte";
    import { onMount } from "svelte";
    import { colourInfo, loadColours } from "./loadColours.svelte";
    import { ownedColours } from "./ownedColours.svelte";

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

    let showStats = $state(false);
</script>

<main>
    <aside>
        <ul>
            <li>
                <a class="back-button" href="/development">← Back</a>
            </li>
            {#each categories as category}
                <li>
                    <a href={"#" + category}>
                        {category}
                    </a>
                </li>
            {/each}
        </ul>
    </aside>

    <div class="layout">
        <div class="cover">
            <img alt="" id="#top" src="src/lib/img.png" />
        </div>

        <div class="content">
            <div class="overview">
                <h1 class="title">Hueventory</h1>
                <p class="section-title">Overview</p>
                <p class="desc">
                    A project built to help my little sister track her collected colour swatches. &lt;3
                </p>
            </div>

            <div class="sections">
                {#each categoryStats as stat}
                    <section class="colour-category">
                        <div class="category-header">
                            <p id="{stat.category}" class="section-title">{stat.category}</p>
                            <p class="stat-text">
                                {stat.owned}/{stat.total} ({stat.percent.toFixed(0)}%)
                            </p>
                        </div>

                        <div class="progress-bar">
                            <div
                                class="progress-fill"
                                style={`width: ${stat.percent}%`}
                            />
                        </div>

                        <div class="swatch-group">
                            {#each colourInfo.data.filter((c) => c.category === stat.category) as colour}
                                <ColourSwatch
                                    {colour}
                                    isOwned={ownedColours.data.has(colour.hex)}
                                />
                            {/each}
                        </div>
                    </section>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 10rem 1fr;
        gap: 4rem;
        min-height: 170vh;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .sections {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .colour-category {
        padding-bottom: 2rem;
        border-bottom: 1px solid #e8e8e8;
    }

    .category-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.75rem;
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

    .swatch-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 1rem;
    }
</style>
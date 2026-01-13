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

    const ownedPercentage = $derived(
        totalColours ? (totalOwned / totalColours) * 100 : 0,
    );

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

<header class="topbar">
    <h1>Hueventory</h1>
    <div>
        <button class="menu" onclick={() => (showStats = !showStats)}>
            ☰
        </button>
    </div>
</header>

<h2>Colour Swatch Archive</h2>
<p>desc.</p>

<hr />

<main class="content-grid">
    <div class="main-colour-container">
        {#each categories as category}
            <section class="colour-section">
                <h3>{category}</h3>
                <div class="swatch-group">
                    {#each colourInfo.data.filter((c) => c.category === category) as colour}
                        <ColourSwatch
                            {colour}
                            isOwned={ownedColours.data.has(colour.hex)}
                        />
                    {/each}
                </div>
            </section>
        {/each}
    </div>
    <div class="column stats-sidebar" class:open={showStats}>
        <div>
            <h3>
                Total Owned: {totalOwned}/{totalColours}
                ({ownedPercentage.toFixed(1)}%)
            </h3>
            {#each categoryStats as stat}
                <p>
                    {stat.category}: {stat.owned} / {stat.total}
                    ({stat.percent.toFixed(1)}%)
                </p>
            {/each}
        </div>
    </div>
</main>

<style>
    .content-grid {
        display: grid;
        width: 100%;
        grid-template-columns: auto 20%;
        height: calc(100vh - 1.5rem);
        overflow: hidden;
    }

    .main-colour-container {
        overflow: auto;
        scrollbar-width: none;
        box-sizing: border-box;
    }

    .swatch-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 0.5rem;
    }

    .topbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .topbar h1 {
        margin: 0;
        position: sticky;
        letter-spacing: 0.1em;
    }

    h3 {
        position: sticky;
        top: 0;
        margin: 0;
        background-color: var(--color-bg-0);
    }

    .menu {
        display: none;
    }

    .stats-sidebar  {
        padding: 0 0 0 2rem;
    }

    .stats-sidebar p {
        line-height: 3rem;
    }

    @media (max-width: 768px) {
        .topbar h1 {
            font-size: 1rem;
        }

        .swatch-group {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }

        .menu {
            display: block;
            position: static;
            top: 1rem;
            right: 1rem;
            z-index: 100;
        }

        .stats-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 250px;
            background: var(--color-bg-0);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 20;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.25);
            padding: 0.2rem 1rem 1rem;
            box-sizing: border-box;
            overflow-y: auto;
        }

        .stats-sidebar.open {
            transform: translateX(0);
        }
    }
</style>

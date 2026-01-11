<!-- Todo: -->
<!--    - fun charts to display colours owned and colour percentage of colour categories owned -->
<!--    - colour opacity is lowered and a tick appears in the bottom right for owned colours -->

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

    const commit: string = import.meta.env.VITE_PUBLIC_COMMIT_HASH;

    let showStats = $state(false);
</script>

<header class="topbar">
    <h1>Hueventory - Colour Swatch Archive</h1>
    <div>
        <button class="menu" onclick={() => (showStats = !showStats)}>
            ☰
        </button>
    </div>
</header>

<main class="main">
    <div class="column" style="flex-grow: 4;">
        <div class="main-colour-container">
            {#each categories as category}
                <section class="colour-section">
                    <h2>{category}</h2>
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
    </div>

    <div
        class="column stats-sidebar"
        class:open={showStats}
        style="flex-grow: 1"
    >
        <div class="stats">
            <div>
                <h2>
                    Total Owned: {totalOwned}/{totalColours}
                    ({ownedPercentage.toFixed(1)}%)
                </h2>
                {#each categoryStats as stat}
                    <p>
                        {stat.category}: {stat.owned} / {stat.total}
                        ({stat.percent.toFixed(1)}%)
                    </p>
                {/each}
            </div>
        </div>
        <span style="position: fixed; bottom: 1em; right: 1em;">
            {#if commit}
                Commit <a
                    href="https://github.com/Jazzmoin/Hueventory/commit/{commit}"
                    >{commit.slice(0, 8)}</a
                >
            {:else}
                Running in dev
            {/if}
        </span>
    </div>
</main>

<style>
    .main {
        display: flex;
        box-sizing: border-box;
        height: 100vh;
        width: 100%;
    }

    .column {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        min-height: 0;
    }

    .main-colour-container {
        overflow: auto;
        scrollbar-width: none;
        box-sizing: border-box;
        padding-bottom: 10%;
    }

    .swatch-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 0.5rem;
    }

    h2 {
        position: sticky;
        background-color: #242424;
        top: 0;
        z-index: 10;
        text-transform: uppercase;
        margin: 0;
        padding: 2rem 0 0.1rem 0;
    }

    .topbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .topbar h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 500;
        color: white;
        position: sticky;
        padding-top: 0.5em;
        z-index: 5;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }

    .menu {
        display: none;
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: white;
    }

    .stats-sidebar .stats {
        background-color: #242424;
        padding: 0 1.5rem 1.5rem;
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
            background: #242424;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 20;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
            padding: 0.2rem 1rem 1rem;
            box-sizing: border-box;
            overflow-y: auto;
        }

        .stats-sidebar.open {
            transform: translateX(0);
        }
    }

    :root {
        font-family:
            Space Grotesk,
            Helvetica,
            Arial,
            sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        overflow-y: hidden;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        display: flex;
        place-items: center;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    #app {
        margin: 0 auto;
        padding: 1rem 3rem 1rem 3rem;
        width: 100%;
    }

    @media (max-width: 768px) {
        #app {
            padding: 1rem 1rem 1rem 1rem;
        }
    }
</style>

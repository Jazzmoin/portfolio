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

<main>
    <aside>
        <ul>
            <li>
                <a class="back-button" href="/design">← Back</a>
            </li>
            <li>
                <a href="#overview">Overview</a>
            </li>
        </ul>
    </aside>

    <div class="layout">
        <div class="cover">
            <img alt="" src="src/lib/img.png" id="#top" />
        </div>

        <div class="content">
            <div class="overview">
                <h1>Flower Garden</h1>
                <p id="overview" class="section-title">Overview</p>
                <p>desc.</p>
            </div>

            <span bind:this={container} style="display:none;"></span>

        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 4rem;
        min-height: 170vh;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    :global(canvas) {
        display: block;
        margin: auto;
        cursor: none;
    }
</style>

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

<h1>Flower Garden</h1>
<h2>Flower Planting Sim</h2>
<p>A project I made to learn Rust and Nannou.</p>

<main>
    <span bind:this={container} style="display:none;"></span>
</main>

<style>
    :global(canvas) {
        display: block;
        margin: auto;
        cursor: none;
    }
</style>

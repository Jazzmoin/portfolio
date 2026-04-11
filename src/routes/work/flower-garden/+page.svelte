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

<div class="project-page">
    <div class="layout">
        <header id="overview" class="project-header">
            <p class="project-type">Flower Planting Playground</p>
            <h1 class="project-title">Flower Garden</h1>
            <p class="project-description">
                A Project created to learn Rust and Nannou.
            </p>
        </header>

        <div class="project-sections">
            <section id="simulation" class="project-section">
                <div class="section-header">
                    <p class="section-type">[simulation]</p>
                    <h2 class="section-heading">Grow the scene in real time</h2>
                </div>

                <p class="section-description">
                    The live canvas handles the interactive planting experience
                    and turns the page into a small procedural garden
                    playground.
                </p>

                <div class="section-body">
                    <span bind:this={container} style="display:none;"></span>
                </div>
            </section>
        </div>
    </div>
</div>

<style>
    :global(canvas) {
        display: block;
        margin: auto;
        cursor: none;
    }
</style>

<script>
    import InfoPanel from "$lib/components/InfoPanel.svelte";
    import Card from "$lib/components/Card.svelte";

    export let sectionTitle = "";
    export let cards = [];
</script>

<InfoPanel />

<div class="basis-8/10">
    <h2 class="pb-5">{sectionTitle}</h2>

    <div class="card-layout">
        {#each cards as card}
            <Card
                href={card.href}
                title={card.title}
                desc={card.desc}
                img={card.img}
            />
        {/each}
    </div>
</div>

<style>
    h2 {
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text);
        text-decoration: none;
        align-items: center;
    }

    .card-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2rem;
        row-gap: 3em;
    }
</style>

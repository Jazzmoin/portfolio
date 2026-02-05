<script lang="ts">
    import Card from "$lib/components/Card.svelte";

    // svelte 4 shit -> fix later
    export let sectionTitle = "";
    export let cards = [];
</script>

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
        color: var(--color-text-0);
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

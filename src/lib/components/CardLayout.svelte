<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import type { CardType } from "$lib/types";
    let {sectionTitle, cards}: {sectionTitle: string, cards: CardType[]} = $props();
</script>

<div class="content-grid">
    <h2>{sectionTitle}</h2>

    <div class="card-grid">
        {#each cards as card}
            <Card {card} />
        {/each}
    </div>
</div>

<style>
    .content-grid {
        padding: var(--dot-spacing) calc(var(--dot-spacing) * 8 );
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
</style>

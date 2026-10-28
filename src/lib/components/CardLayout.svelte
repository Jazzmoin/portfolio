<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import type { CardType } from "$lib/types";
    let { cards }: { cards: CardType[] } = $props();
</script>

<div class="card-grid">
    {#each cards as card}
        <Card {card} />
    {/each}
</div>

<style>
    .card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(1.25rem, 3vw, 2rem);
        padding: 0.5rem var(--page-gutter) 5rem;
    }

    @media (max-width: 800px) {
        .card-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 0.5rem var(--page-gutter) 3rem;
        }
    }
</style>

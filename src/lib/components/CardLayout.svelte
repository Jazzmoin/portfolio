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
        gap: 1.5rem;
        padding: 0.5rem 8.5rem 5rem;
    }

    @media (max-width: 800px) {
        .card-grid {
            grid-template-columns: 1fr;
            padding: 0.5rem 1rem 3rem;
        }
    }
</style>

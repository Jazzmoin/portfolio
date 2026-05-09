<script lang="ts">
    import type { CardType } from "$lib/types";

    const { card }: { card: CardType } = $props();
</script>

<div class="card">
    {#if card.reload}
        <a data-sveltekit-reload href={card.href}>
            <img alt="" src={card.img} />
            <div class="text">
                <h3 class="card-title">{card.title}</h3>
                <p class="category">{card.category}</p>
            </div>
        </a>
    {:else}
        <a href={card.href}>
            <img alt="" src={card.img} />
            <div class="text">
                <h3 class="card-title">{card.title}</h3>
                <p class="category">{card.category}</p>
            </div>
        </a>
    {/if}
</div>

<style>
    .card {
        display: flex;
        cursor: pointer;
        flex-flow: column;
        text-align: left;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h3 {
        color: var(--color-accent-1);
    }

    a {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1.2rem;
        border: 1px solid var(--color-accent-1);
        border-radius: 1rem;
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease;
    }

    a:hover {
        background: color-mix(in srgb, var(--color-accent-1) 10%, transparent);
        transform: translateY(-0.35rem);
    }

    img {
        aspect-ratio: 16 / 9;
        width: 100%;
        max-width: 100%;
        border-radius: inherit;
        object-fit: cover;
    }
</style>

<script lang="ts">
    import type { CardType } from "$lib/types";

    const { card }: { card: CardType } = $props();
    let { category, title, img, reload = false, href } = card;
</script>

<div class="card">
    {#if reload}
        <a data-sveltekit-reload {href}>
            <img alt="" src={img} />
            <p class="category">{category}</p>
            <h2 class="card-title">{title}</h2>
        </a>
    {:else}
        <a {href}>
            <img alt="" src={img} />
            <p class="category">{category}</p>
            <h2 class="card-title">{title}</h2>
        </a>
    {/if}
</div>

<style>
    .card {
        display: flex;
        cursor: pointer;
        flex-flow: column;
    }

    img:hover {
        transform: scale(0.98);
    }

    img {
        aspect-ratio: 16 / 10;
        max-width: 100%;
        border-radius: 0.5rem;
        border-color: var(--color-bg-1);
        opacity: 0.9;
        transition: transform 0.3s ease-out;
        background-color: pink;
    }
</style>

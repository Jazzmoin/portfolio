<script lang="ts">
    import type { CardType } from "$lib/types";

    const { card }: { card: CardType } = $props();
    let { category, title, img, reload = false, href } = card;
</script>

<div class="card">
    {#if reload}
        <a data-sveltekit-reload {href}>
            {#if img}
                <img alt="" src={img} />
            {:else}
                <div class="image-placeholder" aria-hidden="true"></div>
            {/if}
            <p class="category">{category}</p>
            <h2 class="card-title">{title}</h2>
        </a>
    {:else}
        <a {href}>
            {#if img}
                <img alt="" src={img} />
            {:else}
                <div class="image-placeholder" aria-hidden="true"></div>
            {/if}
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

    img {
        aspect-ratio: 3 / 2;
        max-width: 100%;
        border-radius: 0.2rem;
        border: 1px solid rgba(26, 26, 26, 0.12);
        outline: 1px solid rgba(26, 26, 26, 0.35);
        outline-offset: 0;
        opacity: 0.9;
    }

    .image-placeholder {
        aspect-ratio: 16 / 9;
        width: 100%;
        border-radius: 0.2rem;
        border: 1px solid rgba(26, 26, 26, 0.12);
        outline: 1px solid rgba(26, 26, 26, 0.35);
        background: rgba(232, 229, 229, 0.55);
    }
</style>

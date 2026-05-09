<script lang="ts">
    import type { CardType } from "$lib/types";

    const { card }: { card: CardType } = $props();
</script>

<div class="card">
    {#if card.reload}
        <a data-sveltekit-reload href={card.href}>
            {#if card.img}
                <img alt="" src={card.img} />
            {:else}
                <div class="image-placeholder" aria-hidden="true"></div>
            {/if}
            <h2 class="card-title">{card.title}</h2>
            <p class="category">{card.category}</p>
        </a>
    {:else}
        <a href={card.href}>
            {#if card.img}
                <img alt="" src={card.img} />
            {:else}
                <div class="image-placeholder" aria-hidden="true"></div>
            {/if}
            <h2 class="card-title">{card.title}</h2>
            <p class="category">{card.category}</p>
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

    h2 {
        color: var(--color-theme-2);
    }

    a {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        padding: 0.9rem;
        border: 1px solid var(--color-line);
        border-radius: 1rem;
        background: rgba(255, 248, 242, 0.68);
        box-shadow: 0.55rem rgba(132, 165, 157, 0.14);
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease;
    }

    a:hover {
        background: var(--color-theme-1);
        transform: translateY(-0.35rem);
    }

    img {
        aspect-ratio: 16 / 9;
        width: 100%;
        max-width: 100%;
        border-radius: inherit;
        object-fit: cover;
    }

    .image-placeholder {
        aspect-ratio: 16 / 9;
        width: 100%;
        border-radius: 0.2rem;
        border: 1px solid var(--color-line);
        outline: 1px solid rgba(66, 51, 45, 0.22);
        background-color: rgba(255, 248, 242, 0.86);
        background-image:
            linear-gradient(
                135deg,
                rgba(246, 189, 96, 0.22),
                rgba(245, 202, 195, 0.2) 55%,
                rgba(132, 165, 157, 0.18)
            ),
            radial-gradient(
                circle,
                rgba(132, 165, 157, 0.18) 1.1px,
                transparent 1.25px
            );
        background-size:
            100% 100%,
            0.9rem 0.9rem;
    }
</style>

<script lang="ts">
    let { children } = $props();
</script>

<div class="recipe-shell">
    {@render children()}
</div>

<style>
    .recipe-shell {
        box-sizing: border-box;
        width: min(100%, 60rem);
        margin-inline: auto;
        padding: 3rem 1rem 5rem;
    }

    :global(.recipe-shell h1) {
        margin: 0 0 2rem;
        font-size: clamp(2.5rem, 7vw, 5rem);
    }

    :global(.recipe-shell h2) {
        margin: 2.5rem 0 1rem;
        padding: 0.85rem 1rem;
        border: 1px solid var(--color-line);
        border-radius: 0.65rem 0.65rem ;
        background: var(--color-bg-2);
        font-size: var(--text-xl);
    }

    :global(.recipe-shell h2 + ul),
    :global(.recipe-shell h2 + ol) {
        margin-top: -1rem;
    }

    :global(.recipe-shell ul),
    :global(.recipe-shell ol) {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        margin: 0 0 2rem;
        padding: 1.25rem 1.5rem 1.25rem 2.75rem;
        border: 1px solid var(--color-line);
        border-top: 0;
        border-radius: 0 0 0.65rem 0.65rem;
        background: rgba(255, 248, 242, 0.78);
        box-shadow: 0.45rem 0.45rem 0 rgba(132, 165, 157, 0.13);
    }

    :global(.recipe-shell li) {
        font-family: var(--font-sans);
        font-size: var(--text-base);
        line-height: 1.55;
        text-transform: none;
    }

    :global(.recipe-shell ol li::marker) {
        font-family: var(--font-mono);
        color: var(--color-theme-2);
        font-weight: 600;
    }

    :global(.recipe-shell ul li::marker) {
        color: var(--color-theme-3);
    }

    :global(.recipe-shell p) {
        max-width: 42rem;
    }

    @media (max-width: 800px) {
        .recipe-shell {
            padding: 2rem 0.75rem 4rem;
        }
    }
</style>

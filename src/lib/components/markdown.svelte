<script lang="ts">
    let { children } = $props();
</script>

<div class="markdown-page">
    {@render children()}
</div>

<style>
    :global(main:has(.markdown-page)) {
        width: 50%;
    }

    .markdown-page {
        display: flex;
        flex-direction: column;
        gap: var(--section-gap);
        padding-block: var(--page-top-padding) 4rem;
    }

    .markdown-page > :global(*) {
        margin: 0;
    }

    .markdown-page :global(img) {
        display: block;
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
    }

    @media (max-width: 800px) {
        :global(main:has(.markdown-page)) {
            width: 90%;
        }
    }
</style>

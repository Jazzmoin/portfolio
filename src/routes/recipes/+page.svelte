<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/recipes/fried-rice-recipe",
            category: "-",
            title: "Fried Rice",
            img: "-",
        },
    ];
</script>

<section class="card-section">
    <h2>Recipes</h2>
    <p>-</p>
    <CardLayout {cards} />
</section>

<style>
    .card-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        min-height: calc(100vh - var(--header-height));
        margin-inline: calc(50% - 50vw);
        padding: calc(var(--header-height) + 3rem) 2rem 5rem;
        background: var(--color-bg-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
    }

    .card-section h2,
    .card-section p {
        margin: 0;
    }
</style>

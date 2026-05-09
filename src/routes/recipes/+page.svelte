<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/recipes/fried-rice",
            category: "-",
            title: "Fried Rice",
            img: "",
        },
        {
            href: "/recipes/gateau-manioc",
            category: "Casava Cakes",
            title: "Gateau Manioc",
            img: "",
        },
        {
            href: "/recipes/chicken-wontons",
            category: "",
            title: "Chicken Wontons",
            img: "",
        },
          {
            href: "/recipes/samosas",
            category: "",
            title: "Samosas",
            img: "",
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
        padding: var(--page-top-padding) 2rem 5rem;
        background: var(--color-background);
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

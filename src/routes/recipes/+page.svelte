<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";
    import ChickenWontonCover from "$lib/images/recipes/covers/chicken-wonton-cover.webp";
    import SamosaCover from "$lib/images/recipes/covers/samosa-cover.webp";

    const cards = [
        {
            href: "/recipes/chicken-wontons",
            comptimeline: "",
            title: "Chicken Wontons",
            desc: "",
            img: ChickenWontonCover,
        },
        {
            href: "/recipes/samosas",
            comptimeline: "",
            title: "Samosas",
            desc: "",
            img: SamosaCover,
        },
        {
            href: "/recipes/fried-rice",
            comptimeline: "",
            title: "Fried Rice",
            desc: "",
            img: "",
        },
        {
            href: "/recipes/gateau-manioc",
            comptimeline: "",
            title: "Gateau Manioc",
            desc: "",
            img: "",
        },
    ];
</script>

<section class="card-section">
    <h2>Recipes</h2>
    <p>
        A collection of recipes from my mum and I &lt;3 <br /> (Images coming soon...
        they take a while to draw)
    </p>
    <CardLayout {cards} />
</section>

<style>
    .card-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        min-height: calc(100vh - var(--header-height));
        margin-inline: calc(50% - 50vw);
        padding: var(--page-top-padding) 0rem 0rem;
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

<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";
    import flowerGardenCover from "$lib/images/covers/flower-garden-cover.webp";
    import hueventoryCover from "$lib/images/covers/hueventory-cover.webp";
    import todoAnalyticsCover from "$lib/images/covers/todo-analytics-cover.webp";
    import vaseCover from "$lib/images/covers/vase-cover.webp";

    const cards = [
        {
            href: "/work/hueventory",
            category: "Colour Swatch Tracker",
            title: "Hueventory",
            img: hueventoryCover,
        },
        {
            href: "/work/flower-garden",
            category: "Flower Planting Playground",
            title: "Flower Garden",
            img: flowerGardenCover,
        },
        {
            href: "/work/todo-analytics",
            category: "Analytics Dashboard",
            title: "Todo Analytics",
            img: todoAnalyticsCover,
            reload: true,
        },
        {
            href: "/work/vases",
            category: "Personal Project",
            title: "Vases",
            img: vaseCover,
        },
    ];
</script>

<section class="card-section">
    <h2>Work</h2>
    <CardLayout {cards} />
</section>

<style>
    .card-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        padding: 0 2rem 5rem;
        background: var(--color-bg-1);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .card-section h2 {
        margin: 0;
    }
</style>

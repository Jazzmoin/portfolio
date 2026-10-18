<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";
    import flowerGardenCover from "$lib/images/covers/flower-garden-cover.webp";
    import hueventoryCover from "$lib/images/covers/hueventory-cover.webp";
    import todoAnalyticsCover from "$lib/images/covers/todo-analytics-cover.webp";
    import vaseCover from "$lib/images/covers/wallflowers-cover.webp";

    const cards = [
        {
            href: "/work/hueventory",
            timeline: "JUL 2025",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: hueventoryCover,
        },
        {
            href: "/work/flower-garden",
            timeline: "AUG 2025",
            title: "Flower Garden",
            desc: "Flower Planting Playground",
            img: flowerGardenCover,
        },
        {
            href: "/work/todo-analytics",
            timeline: "JUL 2025",
            title: "Todo Analytics",
            desc: "Analytics Dashboard",
            img: todoAnalyticsCover,
            reload: true,
        },
        {
            href: "/work/wallflowers",
            timeline: "JUL 2025",
            title: "Wallflowers",
            desc: "Personal Project",
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
        min-height: calc(100vh - var(--header-height));
        margin-inline: calc(50% - 50vw);
        padding: var(--page-top-padding) 0rem 0rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    .card-section h2 {
        margin: 0;
    }
</style>

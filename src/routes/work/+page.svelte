<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";
    import flowerGardenCover from "$lib/images/covers/flower-garden-cover.webp";
    import hueventoryCover from "$lib/images/covers/hueventory-cover.webp";
    import todoAnalyticsCover from "$lib/images/covers/todo-analytics-cover.webp";
    import vaseCover from "$lib/images/covers/wallflower-cover.webp";
    import BMOCover from "$lib/images/covers/BMO-cover.webp";
    // import secnetCover from "$lib/images/covers/secnet-cover.webp";

    const cards = [
        {
            href: "/work/medication-tracker",
            comptimeline: "University Project - MAY 2026",
            title: "Medication Tracker",
            desc: "Turning an annoying reminder into a cute companion.",
            img: BMOCover,
            reload: true,
        },
        {
            href: "/work/todo-analytics",
            comptimeline: "Personal Project - FEB 2026",
            title: "Todo Analytics",
            desc: "Visualising personal productivity through to-do list data.",
            img: todoAnalyticsCover,
            reload: true,
        },
        {
            href: "/work/wallflower",
            comptimeline: "Personal Project - NOV 2025",
            title: "Wallflower",
            desc: "Hand-painted vases designed to display my LEGO flowers",
            img: vaseCover,
        },
        {
            href: "/work/flower-garden",
            comptimeline: "Personal Project - AUG 2025",
            title: "Flower Garden",
            desc: "Rust-based playground to create your own garden.",
            img: flowerGardenCover,
        },
        {
            href: "/work/hueventory",
            comptimeline: "Personal Project - JUL 2025",
            title: "Hueventory",
            desc: "Library for colour swatches collected from the hardware store.",
            img: hueventoryCover,
        },
        // {
        //     href: "/work/secnet",
        //     comptimeline: "SecNet - FEB 2025",
        //     title: "Website Refresh",
        //     desc: "Refreshing a small business website.",
        //     img: secnetCover,
        //     reload: true,
        // },
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

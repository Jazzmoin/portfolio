<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";
    import flowerGardenCover from "$lib/images/covers/flower-garden-cover.webp";
    import hueventoryCover from "$lib/images/covers/hueventory-cover.webp";
    import todoAnalyticsCover from "$lib/images/covers/todo-analytics-cover.webp";
    import vaseCover from "$lib/images/covers/vase-cover.webp";
    import heroImg from "$lib/images/test.png";

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

<svelte:head>
    <title>Jazzmine Pasnin</title>
    <meta name="description" />
</svelte:head>

<section class="hero">
    <div class="hero-content">
        <img src={heroImg} alt="Floral background" />

        <div class="hero-text">
            <h1>Jazzmine Pasnin</h1>
            <h2>a collection of designs, projects and side quests</h2>
        </div>
    </div>
</section>

<section class="card-section">
    <h2>Featured Work</h2>
    <CardLayout {cards} />
</section>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .hero {
        padding: 0rem 8rem 8rem;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        box-sizing: border-box;
    }

    .hero-content {
        position: relative;
        overflow: hidden;
        background-color: #f4eacf;
        height: 90svh;
        border-radius: 1rem;
    }

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 0;
    }

    .hero-text {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
    }

    h1 {
        -webkit-text-stroke-width: 8px;
        -webkit-text-stroke-color: #f4eacf;
        paint-order: stroke fill;
        font-weight: 600;
    }

    .hero-text h2 {
        color: var(--color-text);
        -webkit-text-stroke-width: 8px;
        -webkit-text-stroke-color: #f4eacf;
        paint-order: stroke fill;
        transform: uppercase;
        font-size: 40px;
    }

    .card-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media (max-width: 800px) {
        .hero-section {
            padding: 0 1rem 4rem;
        }

        .card-section {
            padding-inline: 0.75rem;
            gap: 1.25rem;
        }
    }
</style>

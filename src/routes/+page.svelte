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

<svelte:head>
    <title>Jazzmine Pasnin</title>
    <meta name="description" />
</svelte:head>

<section class="hero-section">
    <div class="sticky-stack" aria-hidden="true">
        <div class="sticky-note sticky-note-name">Jazzmine</div>
        <div class="sticky-note sticky-note-study">Pasnin</div>
    </div>
</section>

<section id="work" class="work-section">
    <CardLayout {cards} />
</section>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .hero-section {
        min-height: calc(100vh - var(--header-height));
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        padding: 3rem 2rem 5rem;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        background-color: var(--color-bg-1);
        background-image: radial-gradient(
            circle,
            rgba(132, 165, 157, 0.2) 1.25px,
            transparent 1.45px
        );
        background-size: 1.35rem 1.35rem;
    }

    .hero-section::after {
        content: "";
        position: absolute;
        inset: auto 0 0;
        height: 8rem;
        background: linear-gradient(
            180deg,
            rgba(255, 250, 245, 0),
            var(--color-bg-1)
        );
        pointer-events: none;
    }

    .sticky-stack {
        position: relative;
        width: min(100%, 46rem);
        min-height: 31rem;
        z-index: 1;
    }

    .sticky-note {
        --note-rotate: 0deg;
        position: absolute;
        width: clamp(14rem, 30vw, 20rem);
        aspect-ratio: 1 / 1;
        padding: 1.75rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        font-size: clamp(1.3rem, 2vw, 1.8rem);
        text-transform: uppercase;
        box-shadow: 0.8rem 0.8rem 0 rgba(66, 51, 45, 0.12);
        border: 1px solid rgba(66, 51, 45, 0.12);
        transform: rotate(var(--note-rotate));
        transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        will-change: transform;
    }

    .sticky-note:hover {
        transform: translateY(-0.55rem) rotate(var(--note-rotate)) scale(1.03);
        box-shadow: 1.1rem 1.1rem 0 rgba(66, 51, 45, 0.16);
    }

    .sticky-note-name {
        --note-rotate: -9deg;
        background: var(--color-theme-1);
        top: 1.5rem;
        left: 3.5rem;
        z-index: 3;
    }

    .sticky-note-study {
        --note-rotate: 8deg;
        background: var(--color-bg-2);
        top: 9rem;
        right: 4.5rem;
        z-index: 2;
    }

    .work-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        padding: 2rem 2rem 5rem;
        background: var(--color-bg-1);
        position: relative;
    }

    @media (max-width: 800px) {
        .hero-section {
            padding: 2rem 0.75rem 4rem;
        }

        .sticky-stack {
            width: min(100%, 25rem);
            min-height: 23rem;
        }

        .sticky-note {
            width: clamp(10.5rem, 44vw, 13rem);
            padding: 1rem;
            font-size: clamp(1rem, 4vw, 1.2rem);
        }

        .sticky-note-name {
            top: 1rem;
            left: 0.35rem;
        }

        .sticky-note-study {
            top: 6.75rem;
            right: 1rem;
        }
    }
</style>

<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/work/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "-",
        },
        {
            href: "/work/flower-garden",
            title: "Flower Garden",
            desc: "Flower Planting Sim",
            img: "-",
        },
        {
            href: "/work/todo-analytics",
            title: "Todo Analytics",
            desc: "-",
            img: "-",
            reload: true,
        },
        {
            href: "/work/whale-phone-holder",
            title: "Whale Phone Holder",
            desc: "First-year project",
            img: "-",
        },
    ];
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="description" />
</svelte:head>

<section class="hero-section">
    <div class="sticky-stack" aria-hidden="true">
        <div class="sticky-note sticky-note-name">Jazzmine Pasnin</div>
        <div class="sticky-note sticky-note-study">Study</div>
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
        padding: 3rem 2rem 5rem;
        background-image: radial-gradient(
            circle,
            var(--color-bg-1) 1.5px,
            transparent 1px
        );
        background-size: 1.5rem 1.5rem;
    }

    .sticky-stack {
        position: relative;
        width: min(100%, 46rem);
        min-height: 31rem;
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
        line-height: 1.05;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        box-shadow: 0.8rem 0.8rem 0 rgba(26, 26, 26, 0.08);
        border: 1px solid rgba(26, 26, 26, 0.08);
        transform: rotate(var(--note-rotate));
        transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        will-change: transform;
    }

    .sticky-note:hover {
        transform: translateY(-0.55rem) rotate(var(--note-rotate)) scale(1.03);
        box-shadow: 1.1rem 1.1rem 0 rgba(26, 26, 26, 0.12);
    }

    .sticky-note-name {
        --note-rotate: -9deg;
        background: #ffd86b;
        top: 1.5rem;
        left: 3.5rem;
        z-index: 3;
    }

    .sticky-note-study {
        --note-rotate: 8deg;
        background: #ffb6d9;
        top: 9rem;
        right: 4.5rem;
        z-index: 2;
    }

    .work-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        padding: 5rem 0 5rem 0;
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

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

    const socialLinks = [
        { href: "#", label: "Email" },
        { href: "#", label: "LinkedIn" },
        { href: "#", label: "Instagram" },
    ];

    const pageLinks = [
        { href: "/", label: "Home" },
        { href: "#work", label: "Work" },
        { href: "/about", label: "About" },
    ];
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="description" />
</svelte:head>

<section class="hero-section">
    <div class="hero-copy">
        <h1>Welcome to my portfolio</h1>
    </div>

    <div class="sticky-stack" aria-hidden="true">
        <div class="sticky-note sticky-note-name">Jazzmine Pasnin</div>
        <div class="sticky-note sticky-note-study">Study</div>
        <div class="sticky-note sticky-note-blank"></div>
    </div>
</section>

<section id="work" class="work-section">
    <CardLayout {cards} />
</section>

<footer class="page-footer">
    <p class="footer-message">
        Thanks for stopping by and taking a look through my work.
    </p>

    <div class="footer-column">
        <h2>Socials</h2>
        <div class="footer-links">
            {#each socialLinks as link}
                <a href={link.href}>{link.label}</a>
            {/each}
        </div>
    </div>

    <div class="footer-column">
        <h2>Pages</h2>
        <div class="footer-links">
            {#each pageLinks as link}
                <a href={link.href}>{link.label}</a>
            {/each}
        </div>
    </div>
</footer>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .hero-section {
        min-height: calc(100vh - var(--header-height));
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
        align-items: center;
        gap: 3rem;
        padding: 4rem 2rem 6rem;
    }

    .hero-copy {
        max-width: 32rem;
    }

    .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        margin-bottom: 1rem;
    }

    .hero-copy h1 {
        font-size: clamp(3rem, 8vw, 6rem);
        line-height: 0.95;
        margin: 0;
        text-transform: uppercase;
        max-width: 8ch;
    }

    .hero-text {
        margin-top: 1.5rem;
        max-width: 24rem;
    }

    .sticky-stack {
        position: relative;
        min-height: 25rem;
    }

    .sticky-note {
        --note-rotate: 0deg;
        position: absolute;
        width: clamp(10rem, 22vw, 14rem);
        aspect-ratio: 1 / 1;
        padding: 1.25rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        font-size: 1.1rem;
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
        top: 0.5rem;
        left: 1rem;
        z-index: 3;
    }

    .sticky-note-study {
        --note-rotate: 8deg;
        background: #ffb6d9;
        top: 5rem;
        right: 1.75rem;
        z-index: 2;
    }

    .sticky-note-blank {
        --note-rotate: -4deg;
        background: #d9f0b8;
        bottom: 0;
        left: 2.5rem;
        z-index: 1;
    }

    .work-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        padding-bottom: 5rem;
    }

    .page-footer {
        display: grid;
        grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
        gap: 2rem;
        padding: 2.5rem 2rem 4rem;
        border-top: 1px solid var(--color-bg-1);
        align-items: start;
    }

    .footer-message {
        max-width: 22rem;
        margin: 0;
    }

    .footer-column h2 {
        margin: 0 0 1rem;
        font-size: 0.8rem;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    @media (max-width: 800px) {
        .hero-section {
            grid-template-columns: 1fr;
            padding-inline: 0.5rem;
            gap: 2rem;
        }

        .sticky-stack {
            min-height: 19rem;
        }

        .page-footer {
            grid-template-columns: 1fr;
            padding-inline: 0.5rem;
        }
    }
</style>

<script lang="ts">
    import { page } from "$app/state";
    import "./layout.css";

    const socialLinks = [
        { href: "mailto:hello@jazzmine.au", label: "Email" },
        { href: "https://www.instagram.com/simplyjazzyp/", label: "Instagram" },
    ];

    let { children } = $props();
    let showFooter = $derived(page.url.pathname !== "/work/flower-garden");
    let menuOpen = $state(false);
</script>

<div class="app">
    <header>
        <div class="header-inner">
            <a class="nav-link nav-recipes" href="/recipes">Recipes</a>
            <a class="nav-link nav-fun" href="/fun">Fun</a>

            <a class="home-link" href="/">
                <img src="/favicon.svg" alt="logo" />
            </a>

            <a class="nav-link nav-work" href="/work">Work</a>
            <a class="nav-link nav-contact" href="mailto:hello@jazzmine.au"
                >Contact</a
            >

            <button
                class="hamburger"
                class:open={menuOpen}
                onclick={() => (menuOpen = !menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        {#if menuOpen}
            <nav class="mobile-menu">
                <a
                    class="mobile-link"
                    href="/recipes"
                    onclick={() => (menuOpen = false)}>Recipes</a
                >
                <a
                    class="mobile-link"
                    href="/fun"
                    onclick={() => (menuOpen = false)}>Fun</a
                >
                <a
                    class="mobile-link"
                    href="/work"
                    onclick={() => (menuOpen = false)}>Work</a
                >
                <a
                    class="mobile-link"
                    href="mailto:hello@jazzmine.au"
                    onclick={() => (menuOpen = false)}>Contact</a
                >
            </nav>
        {/if}
    </header>

    <main>{@render children()}</main>

    {#if showFooter}
        <footer class="footer">
            <div class="footer-inner">
                <p class="footer-message">&lt;3</p>

                <div class="footer-links" aria-label="Contact links">
                    <a href={socialLinks[0].href}>{socialLinks[0].label}</a>
                    <span aria-hidden="true">/</span>
                    <a href={socialLinks[1].href}>{socialLinks[1].label}</a>
                </div>
            </div>
        </footer>
    {/if}
</div>

<style>
    header {
        position: sticky;
        top: 0rem;
        z-index: 3;
        width: 100%;
        margin: 0rem auto 0;
        background-color: var(--color-background);
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }

    .header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-inline: auto;
        padding: 0.5rem 8rem;
        box-sizing: border-box;
        height: var(--header-height);
    }

    .home-link {
        font-family: var(--font-serif);
        font-size: var(--text-2xl);
        line-height: 1;
        flex-shrink: 0;
    }

    .home-link img {
        height: 100%;
        max-height: 3rem;
    }

    .nav-link {
        font-size: var(--heading3);
        font-family: var(--font-serif);
        text-transform: uppercase;
        color: var(--color-primary);
        transition:
            background-color 180ms ease,
            transform 180ms ease;
    }

    .nav-link:hover {
        color: var(--color-accent-1);
    }

    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        z-index: 10;
    }

    .hamburger span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: var(--color-text);
        border-radius: 2px;
        transition:
            transform 200ms ease,
            opacity 200ms ease;
    }

    .hamburger.open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    .mobile-menu {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 1rem 1rem;
        background-color: var(--color-background);
        border-bottom: 1px solid
            color-mix(in srgb, var(--color-text) 16%, transparent);
    }

    .mobile-link {
        font-family: var(--font-serif);
        font-size: var(--heading3);
        text-transform: uppercase;
        color: var(--color-primary);
        padding: 0.5rem 1rem;
        width: 100%;
        text-align: center;
        border-radius: 0.35rem;
        transition: background-color 180ms ease;
    }

    .mobile-link:hover {
        background-color: color-mix(
            in srgb,
            var(--color-primary) 8%,
            transparent
        );
    }

    .footer {
        background: var(--color-background);
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-inline: auto;
        padding: 1rem 8rem;
        box-sizing: border-box;
        border-top: 2px solid
            color-mix(in srgb, var(--color-text) 16%, transparent);
    }

    .footer-message {
        margin: 0;
    }

    .footer-links {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    @media (max-width: 800px) {
        header {
            top: 0.5rem;
        }

        .header-inner {
            padding-inline: 1rem;
        }

        .nav-recipes,
        .nav-fun,
        .nav-work,
        .nav-contact {
            display: none;
        }

        .home-link {
            margin: 0;
        }

        .hamburger {
            display: flex;
        }

        .mobile-menu {
            display: flex;
        }

        .footer-inner {
            padding: 1rem 1.5rem;
        }
    }
</style>

<script lang="ts">
    import { page } from "$app/state";
    import "./layout.css";

    const socialLinks = [
        { href: "mailto:hello@jazzmine.au", label: "Email" },
        { href: "https://www.instagram.com/simplyjazzyp/", label: "Instagram" },
    ];

    let { children } = $props();
    let showFooter = $derived(page.url.pathname !== "/work/flower-garden");
</script>

<div class="app">
    <header>
        <div class="header-inner">
            <a class="nav-link" href="/recipes">Recipes</a>
            <a class="nav-link" href="/fun">Fun</a>

            <a class="home-link" href="/">
                <img src="/favicon.svg" alt="logo" />
            </a>

            <a class="nav-link" href="/work">Work</a>
            <a class="nav-link" href="mailto:hello@jazzmine.au">Contact</a>
        </div>
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
        height: var(--header-height);
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
        height: 100%;
    }

    .home-link {
        font-family: var(--font-serif);
        font-size: var(--text-2xl);
        line-height: 1;
        margin: 0 5rem;
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
            top: 0.75rem;
        }

        .header-inner {
            padding-inline: 0.75rem;
        }

        .footer-inner {
            width: calc(100% - 1.5rem);
        }
    }
</style>

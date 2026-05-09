<script lang="ts">
    import { page } from "$app/state";
    import "./layout.css";

    const pages = [
        // { path: "/art", name: "Art" },
        { path: "/recipes", name: "Recipes" },
        { path: "/work", name: "Work" },
        { path: "mailto:hello@jazzmine.au", name: "Contact" },
    ];

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
            <a class="brand-link" href="/">Jazzmine Pasnin</a>

            <nav>
                <p class="nav-links">
                    {#each pages as elem}
                        <a class="nav-link" href={elem.path}> {elem.name}</a>
                    {/each}
                </p>
            </nav>
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
        font-family: var(--font-mono);
        position: sticky;
        top: 1rem;
        z-index: 4;
        width: min(calc(100% - 1.5rem), 35rem);
        height: var(--header-height);
        margin: 1rem auto 0;
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
        width: 100%;
        margin-inline: auto;
        padding: 0.5rem 1.5rem;
        box-sizing: border-box;
        height: 100%;
        border: 1px solid color-mix(in srgb, var(--color-text) 16%, transparent);
        border-radius: 999px;
        background-color: color-mix(
            in srgb,
            var(--color-background) 82%,
            transparent
        );
        box-shadow: 0 0.85rem 2rem
            color-mix(in srgb, var(--color-text) 10%, transparent);
        backdrop-filter: blur(14px);
    }

    .brand-link {
        font-family: var(--font-serif);
        font-size: 0.95rem;
        line-height: 1;
    }

    .nav-links {
        display: flex;
        gap: 0.35rem;
        margin: 0;
    }

    .nav-link {
        padding: 0.35rem 0.8rem;
        font-size: var(--text-xs);
        border-radius: 999px;
        transition:
            background-color 180ms ease,
            transform 180ms ease;
    }

    .nav-link:hover {
        background: color-mix(in srgb, var(--color-accent-1) 15%, transparent);
        color: var(--color-accent-1);
        transform: translateY(-1px);
    }

    a {
        font-size: var(--text-xs);
    }

    .footer {
        font-family: var(--font-mono);
        background: var(--color-background);
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: min(100%, 60rem);
        margin-inline: auto;
        padding-block: 1rem;
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

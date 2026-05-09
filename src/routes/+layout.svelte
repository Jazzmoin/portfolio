<script lang="ts">
    import "./layout.css";

    const pages = [
        // { path: "/art", name: "Art" },
        { path: "/recipes", name: "Recipes" },
        { path: "/work", name: "Work" },
        { path: "mailto:japasnin@gmail.com", name: "Contact" },
    ];

    const socialLinks = [
        { href: "mailto:japasnin@gmail.com", label: "Email" },
        { href: "https://www.instagram.com/simplyjazzyp/", label: "Instagram" },
    ];

    let { children } = $props();
</script>

<div class="app">
    <header>
        <div class="header-inner">
            <a href="/">Jazzmine Pasnin</a>

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
</div>

<style>
    header {
        font-family: var(--font-mono);
        position: fixed;
        top: 1rem;
        left: 50%;
        z-index: 4;
        width: min(calc(100% - 1.5rem), 35rem);
        height: var(--header-height);
        transform: translateX(-50%);
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
        padding: 0.55rem 0.75rem;
        box-sizing: border-box;
        height: 100%;
        border: 1px solid var(--color-line);
        border-radius: 999px;
        background-color: rgba(255, 250, 245, 0.82);
        box-shadow: 0 0.85rem 2rem rgba(66, 51, 45, 0.12);
        backdrop-filter: blur(14px);
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
        background: rgba(245, 202, 195, 0.55);
        transform: translateY(-1px);
    }

    a {
        font-size: var(--text-xs);
    }

    .footer {
        font-family: var(--font-mono);
        background: var(--color-bg-1);
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: min(100%, 60rem);
        margin-inline: auto;
        padding-block: 1rem;
        box-sizing: border-box;
        border-top: 2px solid var(--color-line);
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

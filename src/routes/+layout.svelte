<script lang="ts">
    import "./layout.css";

    const pages = [
        { path: "/#work", name: "Work" },
        { path: "/about", name: "About" },
    ];

    const socialLinks = [
        { href: "japasnin@gmail.com", label: "Email" },
        { href: "https://www.instagram.com/simplyjazzyp/", label: "Instagram" },
    ];

    let { children } = $props();
</script>

<div class="app">
    <header>
        <a href="/">Jazzmine Pasnin</a>

        <nav>
            <p class="nav-links">
                {#each pages as elem}
                    <a class="nav-link" href={elem.path}> {elem.name}</a>
                {/each}
            </p>
        </nav>
    </header>

    <main>{@render children()}</main>

    <footer class="footer">
        <p class="footer-message">&lt;3</p>

        <div class="footer-links" aria-label="Contact links">
            <a href={socialLinks[0].href}>{socialLinks[0].label}</a>
            <span aria-hidden="true">/</span>
            <a href={socialLinks[1].href}>{socialLinks[1].label}</a>
        </div>
    </footer>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: var(--font-mono);
        border-bottom: 1px solid var(--color-line);
        background-color: rgba(247, 237, 226, 0.88);
        backdrop-filter: blur(10px);
        padding: 1rem var(--page-padding-inline);
        position: sticky;
        top: 0;
        z-index: 4;
        height: var(--header-height);
    }

    .nav-links {
        display: flex;
        gap: 1rem;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: var(--font-mono);
        padding: 1rem var(--page-padding-inline);
        background-color: rgba(247, 237, 226, 0.88);
        border-top: 1px solid var(--color-line);
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
        .footer {
            padding-inline: 0.5rem;
        }
    }
</style>

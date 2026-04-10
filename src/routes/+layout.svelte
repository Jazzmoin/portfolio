<script lang="ts">
    import "./layout.css";

    const pages = [
        { path: "/#work", name: "Work" },
        { path: "/about", name: "About" },
    ];

    const socialLinks = [
        { href: "#", label: "Email" },
        { href: "#", label: "Instagram" },
    ];

    const footerPages = [
        { href: "/", label: "Home" },
        { href: "/#work", label: "Work" },
        { href: "/about", label: "About" },
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
        <p class="footer-message">
            &lt;3
        </p>

        <div class="footer-column">
            <p>Socials</p>
            <div class="footer-links">
                {#each socialLinks as link}
                    <a href={link.href}>{link.label}</a>
                {/each}
            </div>
        </div>

        <div class="footer-column">
            <p>Pages</p>
            <div class="footer-links">
                {#each footerPages as link}
                    <a href={link.href}>{link.label}</a>
                {/each}
            </div>
        </div>
    </footer>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--color-bg-1);
        background-color: var(--color-bg-0);
        padding: var(--dot-spacing) calc(var(--dot-spacing) * 4);
        position: sticky;
        top: 0;
        z-index: 4;
        height: var(--header-height);
    }

    .nav-links {
        display: flex;
        gap: var(--dot-spacing);
    }

    .nav-link {
        padding: 0.5rem 0 0.5rem 1rem;
        letter-spacing: 0.1em;
        font-size: 14px;
    }

    a {
        letter-spacing: 0.1em;
        font-size: 14px;
        /* text-transform: uppercase; */
    }

    .footer {
        display: grid;
        grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
        gap: 2rem;
        padding: 3rem var(--dot-spacing) 3rem calc(var(--dot-spacing) * 4);
        border-top: 1px solid var(--color-bg-1);
        align-items: start;
    }

    .footer-message {
        max-width: 22rem;
        margin: 0;
    }

    .footer-column p {
        margin: 0 0 1rem;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    @media (max-width: 800px) {
        .footer {
            grid-template-columns: 1fr;
            padding-inline: 0.5rem;
        }
    }
</style>

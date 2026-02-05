<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<div class="app">
    <header>
        <div class="header-content">
            <h1>
                <a href="/">Jazzmine Pasnin</a>
            </h1>

            <nav>
                <ul>
                    {#each [{ path: "/design", name: "Design" }, { path: "/development", name: "Development" }, { path: "/about", name: "About" }] as elem}
                        <li>
                            <a class="nav-link" href={elem.path}>
                                {elem.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
    </header>

    <main>{@render children()}</main>

    <footer class="footer"></footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
    }

    main {
        padding: var(--dot-spacing) calc(var(--dot-spacing) * 6);
    }

    .content-grid {
        display: grid;
        grid-template-columns: calc(var(--dot-spacing) * 8) auto;
        min-height: calc(100vh - calc(var(--dot-spacing) * 6));
        gap: var(--dot-spacing);
    }

    .sidePanel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--dot-spacing) calc(var(--dot-spacing) * 6);
    }

    header {
        border-bottom: 1px solid var(--color-bg-1);
        background-color: var(--color-bg-0);
    }

    ul {
        position: relative;
        margin: 0;
        display: flex;
        gap: var(--dot-spacing);
    }

    .nav-link {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
    }

    nav a:hover {
        transform: translateY(-0.25rem);
        transition:
            transform 0.6s ease,
            opacity 0.6s ease;
    }

    h1,
    h1 a {
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text-0);
        text-decoration: none;
        align-items: center;
    }

    .socials {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: uppercase;
        text-decoration: underline;
        letter-spacing: 0.1em;
        padding-right: 1.5rem;
    }

    .socials:hover .arrow {
        transform: translate(6px, -6px);
        opacity: 1;
        transition:
            transform 0.6s ease,
            opacity 0.6s ease;
    }

    .arrow {
        transform: translate(0, 0);
        transition:
            transform 0.6s ease,
            opacity 0.6s ease;
    }
</style>

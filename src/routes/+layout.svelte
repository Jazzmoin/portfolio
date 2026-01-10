<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<div class="app">
    <header>
        <h1>
            <a href="/">Jazzmine Pasnin</a>
        </h1>

        <nav>
            <ul>
                {#each [{ path: "/ux", name: "ux/ui" }, { path: "/coding", name: "coding projects" }, { path: "/product-design", name: "product design" }] as elem}
                    <li>
                        <a href={elem.path}>{elem.name}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </header>

    <main>{@render children()}</main>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        position: relative;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    h1,
    h1 a {
        font-weight: 700;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text);
        text-decoration: none;
        align-items: center;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0 0 2rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 1rem 2rem 1rem 2rem;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: row;
        padding: 2rem 0 1rem 0;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

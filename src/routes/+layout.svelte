<script lang="ts">
    import "./layout.css";
    import { page } from "$app/state";

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

    {#if page.data.sideBar ?? false}
        <div class="content-grid">
            <div class="sidePanel">
                <p>:P</p>

                {#each [{ path: "https://www.instagram.com/simplyjazzyp/", name: "Instagram" }] as elem}
                    <p class="p-1">
                        <a href={elem.path}>{elem.name}</a>
                    </p>
                {/each}
            </div>

            <main>{@render children()}</main>
        </div>
    {:else}
        <main>{@render children()}</main>
    {/if}
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 1rem 2rem 2rem 2rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 15% auto;
        min-height: calc(100vh - 8rem);
    }

    .sidePanel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 8rem 0;
    }

    ul {
        position: relative;
        margin: 0;
        display: flex;
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
</style>

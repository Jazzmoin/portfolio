<script lang="ts">
    // import Background from "$lib/components/Background.svelte";
    import "./layout.css";

    const pages = [
        { path: "/#work", name: "Work" },
        { path: "/about", name: "About" },
    ];

    let { children } = $props();
</script>

<!--    <Background />-->
<div class="app">
    <header>
        <a href="/">Jazzmine Pasnin</a>

        <nav>
            <ul class="nav-links">
                {#each pages as elem}
                    <li>
                        <a class="nav-link" href={elem.path}> {elem.name}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </header>

    <main>{@render children()}</main>

    <footer class="footer"></footer>
</div>

<style>
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
        text-transform: uppercase;
    }
</style>

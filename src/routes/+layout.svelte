<!--<script lang="ts">-->
<!--    import "./layout.css";-->

<!--    const pages = [-->
<!--        { path: "/design", name: "Design" },-->
<!--        { path: "/development", name: "Development" },-->
<!--        { path: "/about", name: "About" },-->
<!--    ];-->

<!--    let { children } = $props();-->
<!--</script>-->

<!--<div class="app">-->
<!--    <header>-->
<!--        <h1>-->
<!--            <a href="/">Jazzmine Pasnin</a>-->
<!--        </h1>-->

<!--        <nav>-->
<!--            <ul>-->
<!--                {#each pages as elem}-->
<!--                    <li>-->
<!--                        <a class="nav-link" href={elem.path}> {elem.name}</a>-->
<!--                    </li>-->
<!--                {/each}-->
<!--            </ul>-->
<!--        </nav>-->
<!--    </header>-->
<!--    <main>{@render children()}</main>-->

<!--    <footer class="footer"></footer>-->
<!--</div>-->

<!--<style>-->
<!--    .app {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--    }-->

<!--    main {-->
<!--        padding: var(&#45;&#45;dot-spacing) calc(var(&#45;&#45;dot-spacing) * 14);-->
<!--    }-->

<!--    header {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        border-bottom: 1px solid var(&#45;&#45;color-bg-1);-->
<!--        background-color: var(&#45;&#45;color-bg-0);-->
<!--        padding: var(&#45;&#45;dot-spacing) calc(var(&#45;&#45;dot-spacing) * 14);-->
<!--    }-->

<!--    ul {-->
<!--        position: relative;-->
<!--        margin: 0;-->
<!--        display: flex;-->
<!--        gap: var(&#45;&#45;dot-spacing);-->
<!--    }-->

<!--    .nav-link {-->
<!--        padding: 0.5rem 1rem;-->
<!--        font-size: 1rem;-->
<!--        letter-spacing: 0.1em;-->
<!--        text-transform: uppercase;-->
<!--        font-weight: 400;-->
<!--        text-decoration: none;-->
<!--    }-->

<!--    nav a:hover {-->
<!--        transform: translateY(-0.25rem);-->
<!--        transition:-->
<!--            transform 0.6s ease,-->
<!--            opacity 0.6s ease;-->
<!--    }-->

<!--    h1,-->
<!--    h1 a {-->
<!--        font-weight: 400;-->
<!--        font-size: 1rem;-->
<!--        text-transform: uppercase;-->
<!--        letter-spacing: 0.1em;-->
<!--        color: var(&#45;&#45;color-text-0);-->
<!--        text-decoration: none;-->
<!--        align-items: center;-->
<!--    }-->
<!--</style>-->

<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<div class="app">
    <main>{@render children()}</main>
</div>

<style>
    .app {
        min-height: 100vh;
        padding: 1rem 2rem 2rem 2rem;
    }
</style>

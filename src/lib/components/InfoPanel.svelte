<script>
</script>

<section>
    <p>:P</p>

    <ul>
        {#each [{ path: "https://www.instagram.com/simplyjazzyp/", name: "Instagram" }] as elem}
            <li class="p-1">
                <a href={elem.path}>{elem.name}</a>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-basis: 20%;
    }

    a {
        color: var(--color-theme-1);
    }
</style>

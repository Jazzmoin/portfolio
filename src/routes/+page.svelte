<script lang="ts">
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="left-col" class="basis-2/10">
    <p>:P</p>

    <ul>
        {#each [{ path: "https://www.instagram.com/simplyjazzyp/", name: "Instagram" }] as elem}
            <li class="p-1">
                <a href={elem.path}>{elem.name}</a>
            </li>
        {/each}
    </ul>
</section>

<div class="basis-8/10">
    <div id="card">
        <img src="" alt="" />

        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
        </p>
    </div>
</div>

<style>
    #left-col {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
</style>

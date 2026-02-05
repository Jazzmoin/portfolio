<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "-",
            title: "-",
            desc: "-",
            img: "-",
        },
    ];
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="description" />
</svelte:head>

<div>
    <h1>Welcome to my portfolio!</h1>
</div>

<CardLayout sectionTitle="Currently working on... " />

<p>Nothing... for now</p>

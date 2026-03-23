<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/work/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "-",
        },
        {
            href: "/work/flower-garden",
            title: "Flower Garden",
            desc: "Flower Planting Sim",
            img: "-",
        },
        {
            href: "/work/todo-analytics",
            title: "Todo Analytics",
            desc: "-",
            img: "-",
            reload: true,
        },
        {
            href: "/work/whale-phone-holder",
            title: "Whale Phone Holder",
            desc: "First-year project",
            img: "-",
        },
    ];
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="description" />
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center">
    <h1>Welcome to my Portfolio!</h1>
    <p>Nothing... for now</p>
</div>

<div id="work">
    <CardLayout {cards} />
</div>

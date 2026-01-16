<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/coding/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "-",
        },
        {
            href: "/coding/flower-garden",
            title: "Flower Garden",
            desc: "Flower Planting Sim",
            img: "-",
        },
    ];
</script>

<CardLayout sectionTitle="Coding Projects" {cards} />

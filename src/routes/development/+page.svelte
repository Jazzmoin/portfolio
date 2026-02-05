<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/development/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "-",
        },
        {
            href: "/development/flower-garden",
            title: "Flower Garden",
            desc: "Flower Planting Sim",
            img: "-",
        },
    ];
</script>

<CardLayout sectionTitle="Development" {cards} />

<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/coding/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "-",
        },
    ];
</script>

<CardLayout sectionTitle="Coding Projects" {cards} />

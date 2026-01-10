<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/coding/hueventory",
            title: "Hueventory",
            desc: "Colour Swatch Tracker",
            img: "/src/lib/images/img.png",
        },
    ];
</script>

<CardLayout sectionTitle="Coding Projects" {cards} />

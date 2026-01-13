<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/product-design/whale-phone-holder",
            title: "Whale Phone Holder",
            desc: "First-year project",
            img: "-",
        },
    ];
</script>

<CardLayout sectionTitle="Product Design" {cards} />

<script>
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/design/whale-phone-holder",
            title: "Whale Phone Holder",
            desc: "First-year project",
            img: "-",
        },
    ];
</script>

<CardLayout sectionTitle="Design" {cards} />

<script lang="ts">
    import CardLayout from "$lib/components/CardLayout.svelte";

    const cards = [
        {
            href: "/recipes/fried-rice-recipe",
            category: "-",
            title: "Fried Rice",
            img: "-",
        },
        {
            href: "/work/flower-garden",
            category: "Flower Planting Playground",
            title: "Flower Garden",
            img: "-",
        },
    ];
</script>

<section id="work" class="work-section">
    <CardLayout {cards} />
</section>

<style>
    .work-section {
        scroll-margin-top: calc(var(--header-height) + 1rem);
        box-sizing: border-box;
        width: 100vw;
        margin-inline: calc(50% - 50vw);
        padding: 2rem 2rem 5rem;
        background: var(--color-bg-1);
        position: relative;
    }
</style>

<script>
    const { title = "", desc = "", href = null, img = "" } = $props();
</script>

<div class="card">
    <a {href}>
        <img alt="" src={img} />
    </a>

    <h3 class="card-title">{title} - {desc}</h3>
</div>

<style>
    .card {
        display: flex;
        cursor: pointer;
        flex-flow: column;
    }

    img:hover {
        transform: scale(0.98);
    }

    img {
        aspect-ratio: 16 / 10;
        max-width: 100%;
        border-radius: 0.5rem;
        opacity: 0.9;
        transition: transform 0.3s ease-out;
    }

    .card-title {
        padding: 0.5rem 0 0 0;
        font-size: 1rem;
        font-weight: 500;
    }
</style>

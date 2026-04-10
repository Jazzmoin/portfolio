<script lang="ts">
    const gallery = [
        { label: "Photo 01", color: "#ffd86b" },
        { label: "Photo 02", color: "#ffb6d9" },
        { label: "Photo 03", color: "#d9f0b8" },
        { label: "Photo 04", color: "#cfe4ff" },
    ];
</script>

<div class="about-page">
    <section class="about-intro">
        <p>Hi, I'm Jazzmine.</p>
    </section>

    <section class="about-gallery" aria-label="About image gallery">
        {#each gallery as image}
            <figure class="gallery-card">
                <div
                    class="gallery-placeholder"
                    style={`background: ${image.color}`}
                >
                    <span>{image.label}</span>
                </div>
            </figure>
        {/each}
    </section>
</div>

<style>
    .about-page {
        min-height: calc(100vh - var(--header-height));
        display: grid;
        grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    }

    .about-intro {
        display: grid;
        padding: 2rem 0;
    }

    .about-gallery {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        padding: 1rem 0 0;
        min-height: 0;
    }

    .gallery-card {
        margin: 0;
        min-width: 0;
        border: 1px solid rgba(26, 26, 26, 0.08);
        background: white;
        overflow: hidden;
    }

    .gallery-placeholder {
        display: flex;
        align-items: end;
        padding: 1rem;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .gallery-placeholder span {
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    @media (max-width: 900px) {
        .about-intro {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1.5rem 0;
        }

        .about-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 640px) {
        .about-page {
            grid-template-rows: 1.1fr 0.9fr;
        }

        .intro-copy h1 {
            font-size: clamp(1.7rem, 8vw, 2.5rem);
            max-width: 12ch;
        }

        .intro-copy p {
            font-size: 0.82rem;
        }

        .about-gallery {
            gap: 0.75rem;
            padding-top: 0.75rem;
        }
    }
</style>

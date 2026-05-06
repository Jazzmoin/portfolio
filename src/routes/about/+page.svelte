<script lang="ts">
    import crochetFlowers from "$lib/images/about/crochet-flowers.webp";
    import heartCake from "$lib/images/about/heart-cake.webp";
    import inkSketch from "$lib/images/about/ink-sketch.webp";
    import year12Artwork from "$lib/images/about/year12-artwork.webp";

    const gallery = [
        { src: year12Artwork, alt: "Year 12 artwork" },
        { src: inkSketch, alt: "Ink sketch" },
        { src: crochetFlowers, alt: "Crochet flowers" },
        { src: heartCake, alt: "Heart cake" },
    ];
</script>

<div class="about-page">
    <section class="about-intro">
        <p>Hi, I'm Jazzmine.</p>
    </section>

    <section class="about-gallery" aria-label="About image gallery">
        {#each gallery as image}
            <figure class="gallery-card">
                <img class="gallery-image" src={image.src} alt={image.alt} />
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

    .about-intro p {
        margin: 0;
        font-family: var(--font-serif);
        font-size: clamp(2rem, 5vw, 3.4rem);
        line-height: 1.04;
        max-width: 10ch;
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
        aspect-ratio: 3 / 4;
        border: 1px solid var(--color-line);
        border-radius: 0.65rem;
        background: rgba(255, 248, 242, 0.74);
        overflow: hidden;
    }

    .gallery-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
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

        .about-gallery {
            gap: 0.75rem;
            padding-top: 0.75rem;
        }
    }
</style>

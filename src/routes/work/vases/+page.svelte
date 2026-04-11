<script lang="ts">
    import originalStorage from "$lib/images/vases/original-storage.webp";
    import vase3dModels from "$lib/images/vases/vase-3D-models.webp";
    import vaseSketches from "$lib/images/vases/vase-sketches.webp";
    import vaseCover from "$lib/images/covers/vase-cover.webp";
</script>

<div class="project-page">
    <div class="layout">
        <header id="overview" class="project-header">
            <h1 class="project-title">Vases</h1>
            <p class="project-description">
                A wall-mounted vase project designed to turn unused wall space
                into a more intentional display for my flowers.
            </p>
        </header>

        <div class="project-sections">
            <section class="project-section">
                <div class="section-header">
                    <p class="section-type">OVERVIEW</p>
                    <h2 class="section-heading">
                        Designed from a real storage need
                    </h2>
                </div>

                <div class="section-content">
                    <div class="section-body">
                        <p class="section-description">
                            This was a personal project where I set out to
                            design a set of vases that could solve a storage
                            issue in my own space. I wanted to create something
                            that was both functional and visually appealing,
                            allowing me to better display things precious to me.
                        </p>
                    </div>
                </div>
            </section>

            <section id="problem" class="project-section section-with-image">
                <p class="section-type section-label">PROBLEM</p>

                <div class="section-copy">
                    <h2 class="section-heading">
                        The flowers needed a better place
                    </h2>

                    <div class="section-body">
                        <p class="section-description">
                            I had a collection of LEGO flowers gifted to me by
                            various people, but I struggled to find a place
                            where they could be properly seen and appreciated.
                            My desk needed to remain clear for drawing, and my
                            existing shelving was too high and enclosed, which
                            led me to realise that my unused wall space could be
                            a better opportunity.
                        </p>
                    </div>
                </div>

                <div class="section-image">
                    <img
                        src={originalStorage}
                        alt="Original flower storage setup"
                    />
                </div>
            </section>

            <section id="process" class="project-section section-with-image">
                <p class="section-type section-label">PROCESS</p>

                <div class="section-copy">
                    <h2 class="section-heading">
                        Sketching and refining through 3D modelling
                    </h2>

                    <div class="section-body">
                        <p class="section-description">
                            My process involved iterating through multiple
                            sketches and experimenting with different vase forms
                            through 3D modelling. By exploring a range of shapes
                            and mounting ideas, I was able to gradually refine
                            both the function and aesthetic of the design.
                        </p>
                    </div>
                </div>

                <div class="section-image section-image-stack">
                    <img src={vaseSketches} alt="Early vase sketches" />
                    <img src={vase3dModels} alt="Vase 3D models" />
                </div>
            </section>

            <section id="solution" class="project-section section-with-image">
                <p class="section-type section-label">SOLUTION</p>

                <div class="section-copy">
                    <h2 class="section-heading">
                        A wall-mounted half vase for display
                    </h2>

                    <div class="section-body">
                        <p class="section-description">
                            I designed a wall-mounted, bulb-like half vase that
                            could securely hold the flowers while freeing up
                            desk and shelf space. The mounting system allows the
                            vase to be fixed directly to the wall, turning the
                            flowers into a more intentional and visible display.
                        </p>

                        <div class="section-notes">
                            <h3 class="section-subheading">Design Decisions</h3>

                            <ul class="decision-list">
                                <li>
                                    I chose to use a mounting method inspired by
                                    power tool battery chargers, as it provided
                                    a simple and reliable way to attach and
                                    remove the vase.
                                </li>
                                <li>
                                    The rounded, bulb-like form was influenced
                                    by the flowers themselves, helping the
                                    object feel playful and connected to what it
                                    holds.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="section-image">
                    <img src={vaseCover} alt="Vases project cover" />
                </div>
            </section>
        </div>
    </div>
</div>

<style>
    .section-content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
        align-items: start;
    }

    .section-with-image {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
        align-items: start;
    }

    .section-label {
        grid-column: 1 / -1;
        margin-bottom: -0.5rem;
    }

    .section-copy {
        display: grid;
        gap: 1rem;
        min-width: 0;
    }

    .section-image {
        display: grid;
        place-items: center;
        aspect-ratio: 7 / 5;
        width: 100%;
        border: 1px solid var(--color-line);
        border-radius: 0.65rem;
        background:
            linear-gradient(
                135deg,
                rgba(246, 189, 96, 0.14),
                rgba(245, 202, 195, 0.16) 52%,
                rgba(132, 165, 157, 0.16)
            ),
            rgba(255, 248, 242, 0.86);
        box-sizing: border-box;
    }

    .section-image img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    }

    .section-image-stack {
        display: grid;
        gap: 1rem;
        aspect-ratio: auto;
        background: transparent;
        border: 0;
        padding: 0;
    }

    .section-image-stack img {
        aspect-ratio: 7 / 5;
        border: 1px solid var(--color-line);
        border-radius: 0.65rem;
        background: rgba(255, 248, 242, 0.86);
    }

    .section-notes {
        display: grid;
        gap: 1rem;
    }

    .section-subheading {
        margin: 0;
    }

    .decision-list {
        display: grid;
        gap: 1rem;
        max-width: 42rem;
        margin: 0;
        padding-left: 1.25rem;
    }

    .decision-list li {
        text-transform: none;
    }

    @media (max-width: 900px) {
        .section-with-image,
        .section-content {
            grid-template-columns: 1fr;
        }
    }
</style>

<script lang="ts">
    import originalStorage from "$lib/images/vases/original-storage.webp";
    import vase3dModels from "$lib/images/vases/vase-3D-models.webp";
    import vaseSketches from "$lib/images/vases/vase-sketches.webp";
    import vaseCover from "$lib/images/covers/vase-cover.webp";
    import vaseDraft from "$lib/images/vases/vase-drafting.webp";
    import vasePaint from "$lib/images/vases/vase-painting.webp";
</script>

<div class="project-page">
    <div class="layout">
        <header id="overview" class="project-header">
            <h1 class="project-title">Vases</h1>
            <p class="project-description">
                This was a personal project where I set out to design a set of
                vases that could solve a storage issue in my own space. I wanted
                to create something that was both functional and visually
                appealing, allowing me to better display my lego flowers!
            </p>
        </header>

        <div class="project-sections">
            <section class="project-section section-with-image">
                <div class="section-copy">
                    <h2 class="section-heading">The Problem</h2>

                    <div class="section-body">
                        <p class="section-description">
                            I have a collection of LEGO flowers gifted to me by
                            my loved ones that used to sit tucked away on my
                            shelf. For a while, I struggled to find a place
                            where they could be properly seen and appreciated.
                            My desk needed to remain clear for my projects, and
                            my existing shelving was too high and enclosed. I
                            then thought: what if I mounted them to the wall
                            like a frame?
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

            <section class="project-section section-with-image">
                <div class="section-copy">
                    <h2 class="section-heading">Sketching and Modelling</h2>

                    <div class="section-body">
                        <p class="section-description">
                            My process began by browsing Pinterest and the many
                            model libraries that exist. From what I gathered in
                            my research and sketching phases, I wanted something
                            that was colourful and fun to brighten up my space.
                            From there, I went into Fusion360 and modelled some
                            potetial vase designs before settling on a bulb
                            shape.
                        </p>
                    </div>
                </div>

                <div class="section-image section-image-stack">
                    <img src={vaseSketches} alt="Vase drafting in pencil" />
                    <img src={vase3dModels} alt="Vase 3D models" />
                </div>
            </section>

            <section class="project-section section-with-image">
                <div class="section-copy">
                    <h2 class="section-heading">Adding some colour</h2>

                    <div class="section-body">
                        <p class="section-description">
                            Once my vases had finished printing, I gave them a
                            good sand and prime. I didn't have any white spray
                            paint so I took advantage of some left over wall
                            paint. Then with a yellow coloured pencil, I drafted
                            my design before going in with some acrylic paint
                            markers. I sealed them with some gloss spray and it
                            was ready to go!
                        </p>
                    </div>
                </div>

                <div class="section-image section-image-stack">
                    <img src={vaseDraft} alt="Early vase sketches" />
                    <img src={vasePaint} alt="Painting design" />
                </div>
            </section>

            <section class="project-section section-with-image">
                <div class="section-copy">
                    <h2 class="section-heading">The Final Design</h2>

                    <div class="section-body">
                        <p class="section-description">
                            The final design is easy to mount to a wall and securely
                            holds the flowers while freeing up desk and shelf
                            space. The mounting system allows the vase to be
                            fixed freely to an open wall, turning the flowers into
                            a more intentional and visible display.
                        </p>

                        <p>
                            I chose to use a mounting method inspired by power
                            tool battery chargers, as it provided a simple and
                            reliable way to attach and remove the vase. The
                            rounded, bulb-like form was influenced by the
                            flowers themselves, making the object feel playful
                            and connected to what it holds.
                        </p>
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
    .section-copy {
        display: grid;
        gap: 1rem;
        min-width: 0;
    }

    .section-image {
        display: grid;
        width: 100%;
        border: 1px solid var(--color-line);
        border-radius: 0.2rem;
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
</style>

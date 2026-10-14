import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

const markdownLayout = fileURLToPath(
    new URL("./src/lib/components/markdown.svelte", import.meta.url),
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".svx", ".md"],
            layout: markdownLayout,
        }),
    ],
    kit: { adapter: adapter() },
    extensions: [".svelte", ".svx", ".md"],
};

export default config;

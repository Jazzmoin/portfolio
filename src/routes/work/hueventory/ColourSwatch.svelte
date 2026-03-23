<script lang="ts">
    import type { Colour } from "./loadColours.svelte.js";
    import { toggleOwned } from "./ownedColours.svelte.js";

    let { colour, isOwned }: { colour: Colour; isOwned: boolean } = $props();

    const textColour = "#242424";
</script>

<div
    class="card"
    onclick={() => toggleOwned(colour.hex)}
    style="background-color: white; opacity: {isOwned
        ? 0.25
        : 1}; color: {textColour}"
>
    <div class="swatch" style="background-color: {colour.hex}"></div>
    <div class="info">
        <p>{colour.code}</p>
        <p style="font-weight: bold">{colour.name}</p>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border-radius: 0.35rem;
        cursor: pointer;
        overflow: hidden;
        transition: 0.2s ease all;
        border: 1px solid #cac2c2;
    }

    .swatch {
        aspect-ratio: 1 / 1;
        transition: 0.2s ease all;
    }

    .card:hover {
        box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.68) !important;
    }

    .info {
        text-align: left;
        padding: 0.5rem;
        height: 5rem;
    }

    p {
        font-size: 14px;
    }
</style>

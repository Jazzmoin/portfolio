<script lang="ts">
    import type { Colour } from "./loadColours.svelte";
    import { toggleOwned } from "./ownedColours.svelte";

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
        display: grid;
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
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }

    p {
        margin: 0;
        font-size: 15px;
    }
</style>

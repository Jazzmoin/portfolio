export interface Colour {
    name: string;
    code: string;
    hex: string;
    category: string;
}

export const colourInfo: { data: Colour[] } = $state({
    data: [],
});

export async function loadColours() {
    const res = await fetch("/colours.json");
    if (!res.ok) throw new Error("Failed to load colours");
    const data: Colour[] = await res.json();
    colourInfo.data = data.sort((a, b) => Number(a.code) - Number(b.code)); // direct assignment triggers reactivity
}

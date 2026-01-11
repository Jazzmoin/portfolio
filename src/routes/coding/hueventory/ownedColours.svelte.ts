export const ownedColours: { data: Set<string> } = $state({
    data: new Set()
});

const json = localStorage.getItem('ownedColours');
if (json) ownedColours.data = new Set(JSON.parse(json));

$effect.root(() => {
    $effect(() => {
        localStorage.setItem('ownedColours', JSON.stringify([...ownedColours.data]));
    });
});

export function toggleOwned(colour: string) {
    ownedColours.data = ownedColours.data.has(colour)
        ? new Set([...ownedColours.data].filter(c => c !== colour))
        : new Set([...ownedColours.data, colour]);
}

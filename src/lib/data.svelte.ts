import { browser } from "$app/environment";
import {
    getTasksForList,
    getTodoLists,
    type LoadedTodoList,
} from "$lib/graph.svelte";
import { getAccessToken } from "$lib/auth";

const KEY: string = "todoLists";

export const allLists: {
    data: LoadedTodoList[];
    selected: string | undefined;
} = $state({
    data: [],
    selected: undefined,
});

const json = localStorage.getItem(KEY);
if (json) allLists.data = JSON.parse(json);

$effect.root(() => {
    $effect(() => {
        localStorage.setItem(KEY, JSON.stringify(allLists.data));
    });
});

export async function load(s: { state: "loading"; progress: number }) {
    if (allLists.data.length) return;
    if (!browser) throw new Error("Not running in a browser environment");

    const token = await getAccessToken();
    const todoLists = await getTodoLists(token);

    allLists.data = await processInSeries(
        todoLists,
        async (x, i) => ({
            ...x,
            items: await getTasksForList(token, x.id, {
                state: s,
                start: i / todoLists.length,
                end: (i + 1) / todoLists.length,
            }),
        }),
        s,
    );
}

export async function reset(s: { state: "loading"; progress: number }) {
    allLists.data = [];
    await load(s);
}

async function processInSeries<T, U>(
    array: T[],
    callback: (item: T, index: number) => Promise<U>,
    s: { state: "loading"; progress: number },
): Promise<U[]> {
    const results: U[] = [];
    for (let i = 0; i < array.length; i++) {
        const result = await callback(array[i], i);
        results.push(result);
        s.progress = (i + 1) / array.length;
    }
    return results;
}

export function setSelected(s: string) {
    allLists.selected = s;
}

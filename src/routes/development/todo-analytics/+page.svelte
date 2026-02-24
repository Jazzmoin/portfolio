<script lang="ts">
    // Todo: TODO Wrapped

    import { onMount } from "svelte";
    import { getSignedInAccount, loginPopup, logout } from "$lib/auth";
    import { Plot, BarY } from "svelteplot";
    import { load, allLists, reset } from "$lib/data.svelte";
    import type { TodoTask } from "$lib/graph.svelte";
    import type { AccountInfo } from "@azure/msal-browser";

    type StateType =
        | { state: "unknown" }
        | { state: "signedOut" }
        | { state: "loading"; progress: number }
        | { state: "signedIn"; user: AccountInfo }
        | { state: "error"; error: string };

    const FULL_DAY: number = 1000 * 60 * 60 * 24;

    /* ----------------- AUTH -----------------*/
    let s: StateType = $state({ state: "unknown" });

    const signIn = async () => {
        try {
            let user = await loginPopup();
            s = { state: "loading", progress: 0 };
            await load(s);
            s = { state: "signedIn", user };
        } catch (e) {
            s = { state: "error", error: (e as Error).message };
        }
    };

    const signOut = async () => {
        await logout();
        s = { state: "signedOut" };
    };

    const mountLoad = async () => {
        let user = await getSignedInAccount();
        if (!user) {
            s = { state: "signedOut" };
        } else {
            s = { state: "loading", progress: 0 };
            await load(s);
            s = { state: "signedIn", user };
        }
    };

    onMount(mountLoad);

    /* ----------------- TASK GROUPER -----------------*/
    let todoLists = $derived(allLists.data);
    let selectedListName = $state("All Tasks");

    let groupedTasks = $derived.by(() => {
        const now = new Date().setHours(0, 0, 0, 0);

        return todoLists
            .filter((list) => {
                if (selectedListName === "All Tasks") return true;
                else return selectedListName === list.displayName;
            })
            .flatMap((list) => {
                const completed = list.items
                    .filter(taskStatusFilter)
                    .map((task) => ({
                        list: list.displayName,
                        day: new Date(taskDateString(task)).setHours(
                            0,
                            0,
                            0,
                            0,
                        ),
                    }));

                return intervals(new Date(now)).map((date) => {
                    return {
                        date,
                        list: list.displayName,
                        n: completed.filter(
                            (t) => periodDateString(new Date(t.day)) === date,
                        ).length,
                    };
                });
            });
    });

    /* ----------------- PERIOD -----------------*/
    let period: "week" | "month" | "6 months" | "last year" | "last 3 years" =
        $state("last year");

    let periodDuration = $derived.by(() => {
        switch (period) {
            case "week":
                return 7;
            case "month":
                return 30;
            case "6 months":
                return 180;
            case "last year":
                return 365;
            case "last 3 years":
                return 365 * 3;
        }
    });

    let periodDateString = $derived((date: Date) => {
        switch (period) {
            case "week":
            case "month":
                return date.toLocaleDateString("en-CA");
            case "6 months":
            case "last year":
            case "last 3 years": {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                return `${year}-${month}`;
            }
        }
    });

    let intervals: (now: Date) => string[] = $derived((now) => [
        ...new Set(
            [...Array(periodDuration).keys()]
                .map((p) => new Date(now.getTime() - p * FULL_DAY))
                .map(periodDateString),
        ),
    ]);

    /* ----------------- TASK STATUS -----------------*/
    let taskStatus:
        | "all"
        | "completedByCompDate"
        | "completedByCreateDate"
        | "uncompleted" = $state("all");

    let taskStatusFilter = $derived((task: TodoTask) => {
        switch (taskStatus) {
            case "all":
                return true;
            case "completedByCompDate":
            case "completedByCreateDate":
                return !!task.completedDateTime;
            case "uncompleted":
                return !task.completedDateTime;
        }
    });

    let taskDateString = $derived((task: TodoTask) => {
        switch (taskStatus) {
            case "all":
            case "uncompleted":
            case "completedByCreateDate":
                return task.createdDateTime;
            case "completedByCompDate":
                return task.completedDateTime!.dateTime;
        }
    });

    let listsByUsage = $derived.by(() =>
        [
            ...groupedTasks.reduce(
                (m, { list, n }) => m.set(list, (m.get(list) ?? 0) + n),
                new Map<string, number>(),
            ),
        ]
            .sort((a, b) => b[1] - a[1])
            .map(([list]) => list),
    );

    const colourScheme = [
        "#F6A3B8",
        "#FFBF91",
        "#efe495",
        "#A8E3C1",
        "#68c59d",
        "#7ADADA",
        "#89B9FF",
        "#9F8FFF",
        "#f5a3f5",
        "#CBA1E0",
        "#ad89d6",
        "#FFBFD6",
    ];

    /* ----------------- TOOL TIP -----------------*/
    type GraphPoint = {
        date: string;
        list: string;
        n: number;
    };

    let graphTooltip: {
        x: number;
        y: number;
        point: GraphPoint;
    } | null = $state(null);

    const showGraphTooltip = (event: MouseEvent, point?: GraphPoint) => {
        if (!point) return;
        graphTooltip = {
            x: event.clientX + 14,
            y: event.clientY + 14,
            point,
        };
    };

    const hideGraphTooltip = () => {
        graphTooltip = null;
    };
</script>

<main>
    <h1>Microsoft To Do Analytics</h1>

    {#if s.state === "unknown"}
        <div>Loading...</div>
    {:else if s.state === "signedOut"}
        <button class="action-btn logout-btn" onclick={signIn}>Sign in</button>
    {:else if s.state === "error"}
        <p class="mt-4 text-red-500">{s.error}</p>
    {:else if s.state === "loading"}
        <p class="mt-4">
            Loading... (Yes this really takes forever don't worry)
        </p>
        <p>Progress {(s.progress * 100).toFixed(2)}%</p>
    {:else}
        <div class="welcome-message">
            <h2>Welcome, {s.user.name ?? "User"}</h2>

            <div class="welcome-actions">
                <button class="action-btn logout-btn" onclick={signOut}>
                    Logout
                </button>

                <button
                    class="action-btn reset-btn"
                    onclick={() => {
                        s = { state: "loading", progress: 0 };
                        reset(s);
                    }}
                >
                    Reset Local Data
                </button>
            </div>
        </div>

        <div class="content-grid">
            <div class="dropdowns-group">
                <div class="dropdown">
                    <h3>To Do Lists</h3>
                    {#if todoLists.length > 0}
                        <select bind:value={selectedListName}>
                            <option value="All Tasks">All Tasks</option>
                            {#each todoLists as list}
                                <option>
                                    {list.displayName}
                                </option>
                            {/each}
                        </select>
                    {:else}
                        <p>No lists found.</p>
                    {/if}
                </div>

                <div class="dropdown">
                    <h3>Period</h3>
                    <select bind:value={period}>
                        <option value="week">Last 7 days</option>
                        <option value="month">Last 30 days</option>
                        <option value="6 months">Last 6 months</option>
                        <option selected value="last year">Last year</option>
                        <option value="last 3 years">Last 3 years</option>
                    </select>
                </div>

                <div class="dropdown">
                    <h3>Task Status</h3>
                    <select bind:value={taskStatus}>
                        <option value="all">All</option>
                        <option value="completedByCompDate"
                            >Completed (grouped by completed date)</option
                        >
                        <option value="completedByCreateDate"
                            >Completed (grouped by created date)</option
                        >
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>

            <div class="task-graphs h-max">
                <h2>
                    {selectedListName}

                    {#if taskStatus === "all" || taskStatus === "uncompleted" || taskStatus === "completedByCreateDate"}
                        — Grouped by Created Date
                    {:else if taskStatus === "completedByCompDate"}
                        — Grouped by Completed Date
                    {/if}
                </h2>

                <Plot
                    x={{ axis: "bottom", tickRotate: 90 }}
                    y={{ grid: true }}
                    color={{
                        legend: true,
                        domain: listsByUsage,
                        // The type error here is wrong
                        // @ts-ignore
                        scheme: colourScheme,
                    }}
                    margin={{ top: 25, bottom: 100 }}
                    aspectRatio={2}
                    height={800}
                >
                    <BarY
                        data={groupedTasks}
                        x="date"
                        y="n"
                        fill={selectedListName === "All Tasks"
                            ? "list"
                            : "#F6A3B8"}
                        fillOpacity={0.8}
                        onpointerenter={showGraphTooltip}
                        onpointermove={showGraphTooltip}
                        onpointerleave={hideGraphTooltip}
                        borderRadius={{
                            topLeft: 5,
                            topRight: 5,
                            bottomLeft: 5,
                            bottomRight: 5,
                        }}
                    />
                </Plot>

                {#if graphTooltip}
                    <div
                        class="graph-tooltip"
                        style="left: {graphTooltip.x}px; top: {graphTooltip.y}px;"
                    >
                        <strong>{graphTooltip.point.list}</strong>
                        <div>{graphTooltip.point.date}</div>
                        <div>
                            {graphTooltip.point.n} task{graphTooltip.point.n ===
                            1
                                ? ""
                                : "s"}
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</main>

<style>
    .content-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        min-height: 70vh;
        /*background-color: var(--color-bg-0);*/
        /*border: 5px solid var(--color-theme-1);*/
        border-radius: 0.5rem;
        padding: 1rem;
    }

    .dropdowns-group {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    select {
        outline: black solid 1px;
        border-radius: 6px;
        width: 100%;
    }

    .welcome-message {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 0.75rem;
        justify-content: space-between;
    }

    .welcome-actions {
        display: flex;
        gap: 0.6rem;
    }

    .action-btn {
        font-size: 0.9rem;
        padding: 0.35rem 0.8rem;
        border-radius: 6px;
        border: 2px solid var(--color-theme-1);
        background: var(--color-bg-0);
        color: var(--color-text-1);

        cursor: pointer;
        transition: all 0.18s ease;
    }

    .action-btn:hover {
        background: var(--color-theme-1);
        /*color: white;*/
        transform: translateY(-1px);
    }

    .reset-btn {
        opacity: 0.9;
    }

    .graph-tooltip {
        position: fixed;
        z-index: 50;
        pointer-events: none;
        min-width: 10rem;
        padding: 0.45rem 0.6rem;
        border: 1px solid var(--color-bg-1);
        border-radius: 0.35rem;
        background: rgba(255, 255, 255, 0.96);
        box-shadow:
            rgba(50, 50, 93, 0.2) 0 4px 10px -2px,
            rgba(0, 0, 0, 0.22) 0 2px 4px -2px;
        font-size: 0.8rem;
        line-height: 1.35;
    }

    .graph-tooltip strong {
        display: block;
        margin-bottom: 0.15rem;
    }
</style>

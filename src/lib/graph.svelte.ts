import { Client, PageIterator } from "@microsoft/microsoft-graph-client";

export interface LoadedTodoList extends TodoList {
    items: TodoTask[];
}

export interface TodoList {
    id: string;
    displayName: string;
    isOwner?: boolean;
    wellknownListName?: string;
}

export interface TodoTask {
    id: string;
    title: string;
    status: string;
    createdDateTime: string;
    completedDateTime?: { dateTime: string; timeZone: string };
    importance?: string;
}

type ProgressState = { state: "loading"; progress: number };

const getClient = (accessToken: string): Client => {
    return Client.init({
        authProvider: (done) => {
            done(null, accessToken);
        }
    });
};

export const getTodoLists = async (accessToken: string): Promise<TodoList[]> => {
    const client = getClient(accessToken);
    const lists: TodoList[] = [];

    const response = await client.api("/me/todo/lists").get();

    const pageIterator = new PageIterator(client, response, (item) => {
        lists.push(item as TodoList);
        return true; // return true to continue iterating
    });

    await pageIterator.iterate();

    return lists;
};

export const getTasksForList = async (
    accessToken: string,
    listId: string,
    progress?: { state: ProgressState; start: number; end: number }
): Promise<TodoTask[]> => {
    const client = getClient(accessToken);
    const tasks: TodoTask[] = [];

    const response = await client.api(`/me/todo/lists/${listId}/tasks`).get();
    const progressStep = progress ? Math.max((progress.end - progress.start) / 200, 0.0002) : 0;
    let currentProgress = progress?.start ?? 0;

    const pageIterator = new PageIterator(client, response, (item) => {
        tasks.push(item as TodoTask);

        if (progress) {
            currentProgress = Math.min(progress.end, currentProgress + progressStep);
            progress.state.progress = currentProgress;
        }

        return true;
    });

    await pageIterator.iterate();

    if (progress) {
        progress.state.progress = progress.end;
    }

    return tasks;
};

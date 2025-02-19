type Todo = {
    id: string,
    status: "Pending" | "Completed",
    createdAt: Date,
    content: string,
};

let todos: Todo[] = [];

export function getTodos(): Todo[] {
    return [];
}

export function addTodo(todo: Todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }

    todos.push(todo);
}

export function toggleTodo(todoId: string) {}

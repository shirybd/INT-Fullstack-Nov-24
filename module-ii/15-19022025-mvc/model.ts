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

export function addTodo(todo: Todo) {}

export function toggleTodo(todoId: string) {}

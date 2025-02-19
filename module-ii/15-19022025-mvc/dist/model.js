let todos = [];
export function getTodos() {
    return [];
}
export function addTodo(todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }
    todos.push(todo);
}
export function toggleTodo(todoId) { }

import { addTodo, getTodos, initTodos, toggleTodo } from "./model.js";
const todosStorageKey = "todos";
export function init() {
    const todos = JSON.parse(localStorage.getItem(todosStorageKey)) ?? [];
    initTodos(todos);
}
export function save() {
    localStorage.setItem(todosStorageKey, JSON.stringify(getTodos()));
}
export function onAddTodoSubmit(formData) {
    const rawContent = formData.get("content");
    if (typeof rawContent !== "string") {
        throw new Error("Content must be a string");
    }
    const content = rawContent.trim();
    if (!content) {
        throw new Error("Content can't be empty");
    }
    addTodo({
        id: crypto.randomUUID().replaceAll("-", "").slice(-8),
        createdAt: new Date().valueOf(),
        status: "Pending",
        content,
    });
}
export const onToggleTodo = toggleTodo;

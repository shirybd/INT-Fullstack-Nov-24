import { onAddTodoSubmit } from "./controller.js";

export function init(addTodoForm: HTMLFormElement) {
    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(addTodoForm, e.submitter);

        try {
            onAddTodoSubmit(formData);
            addTodoForm.reset();
        } catch (error) {
            console.error(error);
        }
    });
}

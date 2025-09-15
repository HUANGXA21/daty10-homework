import {mockApi} from "./apis/mockApi";

export function useTodoService() {
    const updateTodo = todo => mockApi.put("/todos/" + todo.id, {done: !todo.done});

    const deleteTodo = id => mockApi.delete("/todos/" + id);

    const getTodo = () => mockApi.get("/todos")
        .then(response => response.data);

    const createTodo = inputText => mockApi.post("/todos", {
        text: inputText.trim(),
        done: false
    }).then(res => res.data);

    return {updateTodo, deleteTodo, getTodo, createTodo}
}
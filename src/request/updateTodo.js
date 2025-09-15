import {mockApi} from "../apis/mockApi";

export function updateTodo(todo) {
    return mockApi.put("/todos/" + todo.id, {done: !todo.done})
}
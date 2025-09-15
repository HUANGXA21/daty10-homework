import {mockApi} from "../apis/mockApi";

export function createTodo(inputText) {
    return mockApi.post("/todos", {
        text: inputText.trim(),
        done: false
    }).then(res => res.data);
}
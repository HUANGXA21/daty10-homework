import {mockApi} from "../apis/mockApi";

export function deleteTodo(id) {
    return mockApi.delete("/todos/" + id);
}
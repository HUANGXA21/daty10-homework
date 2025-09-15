import {mockApi} from "../apis/mockApi";

export const getTodo = mockApi.get("/todos")
    .then(response => response.data);
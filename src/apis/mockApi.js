import axios from "axios";

export const mockApi = axios.create({
    baseURL: "https://68c7ac8d5d8d9f5147328721.mockapi.io/",
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000
})
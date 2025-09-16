import axios from "axios";
import {message} from "antd";

const mockApi = axios.create({
    //baseURL: "https://68c7ac8d5d8d9f5147328721.mockapi.io/",
    baseURL: "http://localhost:8080/",
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000
})
/*mockApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status, data} = error.response;
        if (status === 404) {
            alert(error.response)
            message.error(error.message).then(r=>{})
        }
        return Promise.reject(error);
    }
);*/
export {mockApi}
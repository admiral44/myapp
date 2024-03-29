import axios from "axios";

export const client = axios.create({
    baseURL: "http://192.168.1.35:8000/api/",
    responseType: 'json',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})
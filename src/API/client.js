import axios from "axios";

export const client = axios.create({
    baseURL: "http://192.168.1.10:8898/api", 
    responseType: 'json',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})
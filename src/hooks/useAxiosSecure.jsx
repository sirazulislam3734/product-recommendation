import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true
})
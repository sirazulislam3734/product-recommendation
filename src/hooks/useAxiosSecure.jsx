import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "https://product-recommendation-server-beta.vercel.app",
    withCredentials: true
})
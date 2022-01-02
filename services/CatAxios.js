import axios from "axios";

const instance = axios.create({
    baseURL: process.env.CAT_API_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CAT_API_KEY,
    },
});

export default instance;

import axios from "axios";

const instance = axios.create({
    baseURL: process.env.CAT_API_URL,
    params: {
        "x-api-key": process.env.CAT_API_KEY,
    },
});

export default instance;

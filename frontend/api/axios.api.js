import Axios from "axios";

const api = Axios.create({
    baseURL: "http://192.168.18.15:3333",
});

export default api;

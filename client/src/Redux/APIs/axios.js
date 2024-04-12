import axios from "axios";


const Axios = axios.create({
    baseURL: "http://localhost:8095/api",
});

export default Axios;
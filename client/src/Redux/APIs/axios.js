import axios from "axios";

const Axios = axios.create({
  baseURL: "https://interest-in-movie-1.onrender.com/api",
});

export default Axios;

import axios from "axios";
let axiosConfig = axios.create({
  baseURL: "https://dummyjson.com/",
});

export default axiosConfig;

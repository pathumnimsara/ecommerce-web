import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-web-production-a568.up.railway.app/api",
});

export default api;
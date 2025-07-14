
import axios from "axios";

// axiosInstance.js: Cấu hình axios với baseURL và interceptor để tự động thêm token vào header nếu có
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,

});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;

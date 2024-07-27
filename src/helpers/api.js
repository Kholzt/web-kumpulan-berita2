// src/helpers/api.js
import axios from "axios";

// URL dasar untuk API
const BASE_URL = "https://api.spaceflightnewsapi.net/v4";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menangani request
api.interceptors.request.use(
  (config) => {
    // Menambahkan token atau informasi lain ke header jika diperlukan
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani error response global di sini
    if (error.response && error.response.status === 401) {
      // Misalnya, jika token kadaluwarsa, arahkan ke halaman login
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

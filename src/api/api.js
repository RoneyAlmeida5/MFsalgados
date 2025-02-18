import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Substitua pela URL da sua API
});

// Interceptor para adicionar o token a todas as requisições
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;
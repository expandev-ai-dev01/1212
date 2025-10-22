import axios from 'axios';

/**
 * @singleton apiClient
 * @summary Singleton Axios client for frontend-backend communication
 * @type rest-client
 * @category core-library
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data?.message || 'Erro na requisição',
        data: error.response.data,
      });
    } else if (error.request) {
      return Promise.reject({
        message: 'Sem resposta do servidor',
      });
    } else {
      return Promise.reject({
        message: error.message || 'Erro desconhecido',
      });
    }
  }
);


import axios, { AxiosError, AxiosResponse } from 'axios';
import { useAuthStore } from '../toolbox/stores/auth';
import { router } from '../routes';
import { ROUTE_LOGIN } from '../toolbox/constants/allRoutes';


export const api = axios.create({
  baseURL: "https://aspexpressapi-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const data = useAuthStore();
  if (data.token) {
    config.headers.Authorization = `Bearer ${data.token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (router.currentRoute.value.path !== ROUTE_LOGIN) {
        useAuthStore().setToken(null);     
      }
    }
    return Promise.reject(error);
  }
);


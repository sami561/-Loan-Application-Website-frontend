import axios from "axios";
import store from "state/store"; // Ensure the path is correct

export const baseURL = "http://localhost:8088/";

const httpClientMultipart = axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
});

httpClientMultipart.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default httpClientMultipart;

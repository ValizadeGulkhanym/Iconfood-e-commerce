import axios from "axios";
import { logout, userData } from "../helper";

export const privateInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_STRAPI_BASE_URL,
  header: {
    "Content-Type": "application/json",
  },
});

privateInstance.interceptors.request.use(
  (config) => {
    const { jwt } = userData();
    try {
      if (jwt) {
        config.headers["Authorization"] = "Bearer " + jwt;
      }
    } catch (error) {
      console.log(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
  },
});

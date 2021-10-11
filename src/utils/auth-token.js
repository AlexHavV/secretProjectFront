import httpConfig from "./http-config";

export default function setAuthToken(token) {
    if (token) {
        httpConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete httpConfig.defaults.headers.common['Authorization'];
    }
  }
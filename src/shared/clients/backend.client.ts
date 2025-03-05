import axios, { AxiosRequestConfig, isAxiosError } from "axios";
import { isMatch } from "src/utils/base.util";
import { catchExeption } from "src/utils/exceptions/common.exception";
import * as authStore from "src/stores/auth.store";
import * as env from "src/configs/env.config";

type OriginalRequest = AxiosRequestConfig & {
  _retry?: boolean;
};

export const requestConfig: AxiosRequestConfig = {
  baseURL: env.client.BACKEND_URL,
  withCredentials: true,
};

export const client = axios.create(requestConfig);
const responseOnReject = async (error: any) => {
  const request: OriginalRequest = { ...error.config, _retry: false };

  try {
    if (isMatch(error.response?.status, 401) && isMatch(request._retry, false)) {
      request._retry = true;
      const response = await axios.get(env.client.BACKEND_AUTH_FALLBACK_ROUTE, requestConfig);

      authStore.setToken(response.data.jwtAccessToken);
      request.headers = {
        ...request.headers,
        Authorization: `Bearer `.concat(response.data.jwtAccessToken),
      };
      return client(request);
    }
    return Promise.reject(error);
  } catch (error) {
    if (
      isAxiosError(error) &&
      isMatch(error.response?.status, 401) &&
      typeof window !== "undefined"
    ) {
      window.location.href = "/signin";
      setTimeout(() => {
        catchExeption(error, { description: "Session expired. Please log in again!" });
      }, 1000);
    }
  }
};

client.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    config.headers.Authorization = `Bearer `.concat(authStore.getToken());
  }
  return config;
});

client.interceptors.response.use((response) => response, responseOnReject);

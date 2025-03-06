import { create } from "zustand";
import * as env from "src/configs/env.config";

interface AuthStore {
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const getToken = (): string => {
  return localStorage.getItem(env.client.ACCESS_TOKEN_NAME) || "";
};

export const setToken = (token: string) => {
  localStorage.setItem(env.client.ACCESS_TOKEN_NAME, token);
};

export const clearToken = () => {
  localStorage.setItem(env.client.ACCESS_TOKEN_NAME, "");
};

export const useAuthStore = create<AuthStore>()(() => ({
  setToken: (token) => {
    setToken(token);
  },
  clearToken: () => {
    clearToken();
  },
}));

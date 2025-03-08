import { env } from "./util";

export const COMPANY_NAME = env(process.env.NEXT_PUBLIC_COMPANY_NAME, "Company");

export const ACCESS_TOKEN_NAME = env(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME, "ACCESS_TOKEN");

export const BACKEND_URL = env(process.env.NEXT_PUBLIC_BACKEND_URL, "https://backend.com");
export const BACKEND_AUTH_ROUTE = env(process.env.NEXT_PUBLIC_BACKEND_AUTH_ROUTE, "/signin");
export const BACKEND_AUTH_FALLBACK_ROUTE = env(
  process.env.NEXT_PUBLIC_BACKEND_AUTH_FALLBACK_ROUTE,
  "/token",
);

export const TERMS_ROUTE = env(process.env.NEXT_PUBLIC_TERMS_ROUTE, "/terms");
export const POLICY_ROUTE = env(process.env.NEXT_PUBLIC_POLICY_ROUTE, "/policy");

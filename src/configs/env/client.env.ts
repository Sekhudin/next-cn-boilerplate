import { env } from "./util";

export const COMPANY_NAME = env(process.env.NEXT_PUBLIC_COMPANY_NAME, "Company");

export const SSO_LOGIN_URL = env(process.env.NEXT_PUBLIC_SSO_LOGIN_URL);

export const ACCESS_TOKEN_NAME = env(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME);

export const BACKEND_URL = env(process.env.NEXT_PUBLIC_BACKEND_URL);
export const BACKEND_AUTH_ROUTE = env(process.env.NEXT_PUBLIC_BACKEND_AUTH_ROUTE);
export const BACKEND_AUTH_FALLBACK_ROUTE = env(process.env.NEXT_PUBLIC_BACKEND_AUTH_FALLBACK_ROUTE);

export const TERMS_ROUTE = env(process.env.NEXT_PUBLIC_TERMS_ROUTE, "/terms");
export const POLICY_ROUTE = env(process.env.NEXT_PUBLIC_POLICY_ROUTE, "/policy");
import { env, NODE_ENV } from "./util";

export const APP_MODE = NODE_ENV;
export const REFRESH_TOKEN_NAME = env(process.env.REFRESH_TOKEN_NAME);

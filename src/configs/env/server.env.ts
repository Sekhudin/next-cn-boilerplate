import { env, NODE_ENV } from "./util";

export const APP_MODE = NODE_ENV;
export const APP_VERSION = env(process.env.APP_NAME, "app");

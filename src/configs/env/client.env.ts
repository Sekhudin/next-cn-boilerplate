import { env } from "./util";

export const APP_NAME = env(process.env.NEXT_PUBLIC_APP_NAME, "app-name");

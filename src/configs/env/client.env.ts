import { env } from "./util";

export const SECRET_KEY = env(process.env.NEXT_PUBLIC_SECRET_KEY, "secret key");

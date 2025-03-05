import app from "../../package.json";
export * as server from "./env/server.env";
export * as client from "./env/client.env";
export { cwd, isMatch, isProduction, pathDir, pathJoin, split, NODE_ENV } from "./env/util";
export { app };

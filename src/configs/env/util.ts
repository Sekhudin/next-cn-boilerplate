import * as path from "path";
import { match } from "ts-pattern";
import type { UnknownPattern } from "ts-pattern/types";

export const env = (environment: string | undefined, defaultValue?: string) => {
  return environment?.trim() || defaultValue?.trim() || "";
};

export const isMatch = (value: unknown, expectedValue: UnknownPattern): boolean => {
  return match(value)
    .with(expectedValue, () => true)
    .otherwise(() => false);
};

export const cwd = process.cwd();
export const NODE_ENV = env(process.env.NODE_ENV, "development");
export const isProduction = (): boolean => isMatch(NODE_ENV, "production");
export const pathDir = (...paths: string[]) => path.join(cwd, ...paths);
export const pathJoin = (...paths: string[]) => path.join(...paths);
export const split = (environment?: string) => {
  if (!environment) return [];
  return environment.split(",").map((value) => value.trim());
};

import { match, P } from "ts-pattern";
import type { UnknownPattern } from "ts-pattern/types";

export const isMatch = (value: unknown, expectedValue: UnknownPattern): boolean => {
  return match(value)
    .with(expectedValue, () => true)
    .otherwise(() => false);
};

export const isNotMatch = (value: unknown, expectedValue: UnknownPattern): boolean => {
  return !isMatch(value, expectedValue);
};

export const withDefault = <T>(value: unknown, defaultValue: T): T => {
  return match(value)
    .with(P.not(P.nullish), () => value as T)
    .otherwise(() => defaultValue as T);
};

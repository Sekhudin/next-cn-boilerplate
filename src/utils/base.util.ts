import { match } from "ts-pattern";
import type { UnknownPattern } from "ts-pattern/types";

export const isMatch = (value: unknown, expectedValue: UnknownPattern): boolean => {
  return match(value)
    .with(expectedValue, () => true)
    .otherwise(() => false);
};

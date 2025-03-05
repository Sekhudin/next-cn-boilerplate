import z from "zod";
import { catchInvalidSchemaAsWarning } from "./exceptions/schema.exception";
import type { StandardSchemaV1, ErrorMessage } from "src/types/validation.type";

export * as z from "zod";
export * from "./base.util";
export * as zz from "./zod-schema/custom.schema";
export type * from "src/types/validation.type";

export const createSchema = <T extends z.ZodType<any, any, any>>(
  schema: T,
): StandardSchemaV1<z.infer<typeof schema>> => ({
  "~standard": {
    version: 1,
    vendor: "zod",
    validate: (value) => {
      try {
        return schema.parse(value);
      } catch (error) {
        catchInvalidSchemaAsWarning(error);
        return error;
      }
    },
  },
});

export const getErrorMessage = (error: unknown): ErrorMessage => {
  const defaultMessage = "validation failed";
  if (error instanceof z.ZodError) {
    const message = error.issues[0]?.message.toLowerCase() || defaultMessage;
    const errors = error.errors.map(({ path, message }) => ({ path, message }));
    return { message, errors };
  }

  return { message: defaultMessage, errors: null };
};

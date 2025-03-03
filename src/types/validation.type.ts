import type { ZodIssue } from "zod";
import type { StandardSchemaV1 } from "@standard-schema/spec";

export type Dto<Schema extends StandardSchemaV1> = StandardSchemaV1.InferInput<Schema>;
export type ErrorMessage = {
  message: string;
  errors: Pick<ZodIssue, "path" | "message">[] | null;
};
export type { StandardSchemaV1 };

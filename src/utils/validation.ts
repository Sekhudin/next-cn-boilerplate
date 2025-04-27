import z from "zod";
import * as zz from "./schema";
import { StandardSchemaV1, Dto } from "src/types/global.type";
import { catchable, catchFormException } from "./exception";
export * from "./base";

export const createSchema = <T extends z.ZodType<any, any, any>>(
  schema: T,
): StandardSchemaV1<z.infer<typeof schema>> => ({
  "~standard": {
    version: 1,
    vendor: "zod",
    validate: (value) => catchable(() => schema.parse(value), catchFormException),
  },
});

export { z, zz };
export type { Dto };

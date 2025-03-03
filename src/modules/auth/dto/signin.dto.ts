import { z, zz, createSchema, Dto } from "src/utils/validation.util";

export const signInSchema = createSchema(
  z.object({
    username: zz.username(),
    password: zz.password(),
  }),
);

export type SignInDto = Dto<typeof signInSchema>;

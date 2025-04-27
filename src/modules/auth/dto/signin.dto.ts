import { z, zz, createSchema, Dto } from "src/utils/validation";

export const signInSchema = createSchema(
  z.object({
    email: zz.email(),
    password: zz.password(),
  }),
);

export type SignInDto = Dto<typeof signInSchema>;
export const signInDefault: SignInDto = {
  email: "",
  password: "",
};

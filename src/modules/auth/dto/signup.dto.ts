import { z, zz, createSchema, Dto } from "src/utils/validation.util";

export const signUpSchema = createSchema(
  z
    .object({
      fullName: zz.username(),
      email: zz.email(),
      password: zz.password(),
      confirmPassword: z.string(),
    })
    .superRefine(
      zz.superRefineShouldMatch("confirmPassword", "password", {
        message: "confirm password do not match!",
      }),
    ),
);

export type SignUpDto = Dto<typeof signUpSchema>;
export const signUpDefault: SignUpDto = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

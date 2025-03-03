import { z, zz, createSchema } from "src/utils/validation.util";

export const signinSchema = createSchema(
  z.object({
    username: zz.username(),
    password: zz.password(),
  }),
);

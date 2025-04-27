import z from "zod";

export const string = (field: string) => z.string().trim().min(1, `${field} can't be empty!`);
export const email = () => z.string().email();
export const username = () => string("username");
export const password = () => string("password");
export const refineMatch =
  (field: string, expectedField: string, opts?: { message: string }) =>
  (value: Record<string, any>, ctx: z.RefinementCtx) => {
    console.log(value);
    if (value[field] !== value[expectedField]) {
      ctx.addIssue({
        code: "custom",
        message: opts?.message || field.concat(" do not match!"),
        path: [field, expectedField],
      });
    }
  };

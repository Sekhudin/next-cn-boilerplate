import z from "zod";

export const requiredString = (field: string) => {
  return z.string().trim().min(1, `${field} can't be empty!`);
};
export const email = () => z.string().trim().toLowerCase().email();

export const username = () => requiredString("username").toLowerCase();
export const password = () => requiredString("password");

export const superRefineShouldMatch =
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

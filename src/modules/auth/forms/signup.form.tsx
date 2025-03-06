"use client";
import { useForm } from "react-hook-form";
import { Input } from "src/shared/ui/input";
import { Button } from "src/shared/ui/button";
import { PasswordInput } from "src/shared/ui/password-input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "src/shared/ui/form";
import { authService } from "../services/auth.service";
import { signUpSchema, signUpDefault, SignUpDto } from "../dto/signup.dto";
import { schemaResolver, createOnSubmit } from "src/utils/form.util";
import { cn, Props } from "src/utils/common";
import { Anchor } from "src/shared/ui/anchor";

const SignUpForm = ({ className }: Props) => {
  const form = useForm<SignUpDto>({
    resolver: schemaResolver(signUpSchema),
    defaultValues: signUpDefault,
  });

  const onSubmit = createOnSubmit<SignUpDto>(async (values) => {
    const payload = await authService.signUp(values);
    if (payload) {
      window.location.href = "/signin";
    }
  });

  return (
    <Form {...form}>
      <form
        className={cn("p-6 md:p-8 space-y-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Register your account</h1>
          <p className="text-balance text-muted-foreground text-sm">
            Enter your email to sign up for an account.
          </p>
        </div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="john doe" type="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="john@mail.com" type="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Sign Up
        </Button>

        <div className="text-center text-sm">
          Already have an account? <Anchor href="/signin">Sign in</Anchor>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;

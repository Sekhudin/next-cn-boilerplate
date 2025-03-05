"use client";
import { useForm } from "react-hook-form";
import { Input } from "src/shared/ui/input";
import { Button } from "src/shared/ui/button";
import { Anchor } from "src/shared/ui/anchor";
import { PasswordInput } from "src/shared/ui/password-input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "src/shared/ui/form";
import { authService } from "../services/auth.service";
import { signInSchema, signInDefault, SignInDto } from "../dto/signin.dto";
import { schemaResolver, catchExeption } from "src/utils/form.util";
import { cn, Props } from "src/utils/common";

const SignInForm = ({ className }: Props) => {
  const form = useForm<SignInDto>({
    resolver: schemaResolver(signInSchema, { raw: true }),
    defaultValues: signInDefault,
  });

  const onSubmit = async (values: SignInDto) => {
    try {
      const payload = await authService.signIn(values);
      if (payload) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      catchExeption(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className={cn("space-y-4 max-w-3xl mx-auto py-10", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-muted-foreground text-sm">
            Enter your email to sign in to your account
          </p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@mail.com" type="email" {...field} />
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

        <Button className="w-full" type="submit">
          Sign In
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button className="w-full" variant="outline">
          <span>X</span>
          Login with Other
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account? <Anchor href="/signup">Sign up</Anchor>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;

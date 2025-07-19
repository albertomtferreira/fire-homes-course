"use client";

import ContinueWithGithubButton from "@/components/continue-with-github-button";
import ContinueWithGoogleButton from "@/components/continue-with-google-button";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth";
import { passwordValidation } from "@/validation/passwordValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: passwordValidation,
});

export default function LoginForm(
  { onSuccess }: { onSuccess?: () => void }
) {
  const auth = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await auth?.loginWithEmail(data.email, data.password);
      onSuccess?.()
    } catch (error: any) {
      toast.error("Error!", {
        description:
          error.code === "auth/invalid-credential"
            ? "Invalid Credentials"
            : `An error occurred during login ${error.code}`,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <fieldset
          disabled={form.formState.isSubmitting}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="password"
                      type="password"
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Login</Button>
          <div className="text-sm">
            Forgotten your password?
            <Link
              href="/forgot-password"
              className="pl-2 underline font-semibold"
            >
              Reset Password
            </Link>{" "}
          </div>
          <div className="text-center mb-4">or</div>
        </fieldset>
      </form>
      <div className="flex flex-col gap-4">
        <ContinueWithGoogleButton />
        <ContinueWithGithubButton />
      </div>
    </Form>
  );
}

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
import { registerUserSchema } from "@/validation/registerUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/(auth)/register/actions";

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerUserSchema>>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof registerUserSchema>) => {
    const response = await registerUser(data);

    if (!!response?.error) {
      toast.error("Error!", {
        description: response.message,
      });
      return;
    }

    toast.success("Success!", {
      description: "Your account was created successfully!",
    });

    router.push("/login");
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
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your Name" className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your Email" className="input-style" />
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
                    <Input {...field} placeholder="Password" type="password" className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Confirm Password"
                      type="password"
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Register</Button>
        </fieldset>

        <div className="text-center mb-4">or</div>
      </form>
      <div className="flex flex-col gap-4">
        <ContinueWithGoogleButton />
        <ContinueWithGithubButton />
      </div>
    </Form>
  );
}

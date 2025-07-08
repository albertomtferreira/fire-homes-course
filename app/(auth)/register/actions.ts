"use server";

import { auth } from "@/firebase/server";
import { registerUserSchema } from "@/validation/registerUser";

export const registerUser = async (data: {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}) => {
  const validation = registerUserSchema.safeParse(data);
  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? "Something went wrong",
    };
  }

  try {
    await auth.createUser({
      displayName: data.name,
      email: data.email,
      password: data.password,
    });
  } catch (error: any) {
    console.log({error})
    return {
      error: true,
      message: error.message ?? `"Something went wrong during register "${error.code}`
    };
  }
};

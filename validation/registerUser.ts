import { z } from "zod";
import { passwordValidation } from "./passwordValidation";

export const registerUserSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(3, "Name must be at least 3 characters"),
    password: passwordValidation,
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        message: "Passwords do not match",
        path: ["passwordConfirm"],
        code: "custom",
      });
    }
  });
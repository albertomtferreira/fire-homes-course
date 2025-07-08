"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2,"Name must be at least 2 characters long"),
  password: z.string().refine((value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
return regex.test(value);
},{
    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
}),
passwordConfirm: z.string()
    }).superRefine(({ passwordConfirm, password }, ctx) => {
        if (passwordConfirm !== password) {
          ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["passwordConfirm"],
          });
        }
    })

export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email:"",
            password:"",
            passwordConfirm:"",
            name:""
        }
    })
  return (
    <div>Register Form</div>
  )
}
import z from "zod";
export const RegisterSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email("Invalid email address")
  });

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
  });
export const ProfileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    preferences: z.object({
      notifications: z.boolean()
    })
  });

export const ResetSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
  })
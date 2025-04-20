import { z } from 'zod';

export const RegisterSchema = z.object({
  username : z.string(),
  email : z.string().optional(),
  password : z.string({
    required_error : "Pasword required"
  }).min(8),
  role : z.string().default("").optional()
})


export const LoginSchema = z.object({
   username : z.string(),
   email : z.string().optional(),
   password : z.string({
     required_error : "Pasword required"
   }).min(8)
})

export const ResestSchema = z.object({
    email : z.string({
        required_error : "email must be given"
    }),
    newPassword : z.string({
         required_error : "New Password must be given"
    }).min(8)
})
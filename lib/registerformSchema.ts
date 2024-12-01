import { z } from "zod";

export const registerFormSchema = z.object({
  username: z
    .string({ message: "Name is Required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  phone: z
    .string({ message: "Phone Number is Required" })
    .regex(/^[0-9]{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits",
    }),

  password: z
    .string({ message: "Password is Required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
  confirmpassword: z
    .string({ message: "Password is Required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});
export const loginFormSchema = z.object({
  phone: z
    .string({ message: "Phone Number is Required" })
    .regex(/^[0-9]{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits",
    }),

  password: z
    .string({ message: "Password is Required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});
export const resetFormSchema = z.object({
  phone: z
    .string({ message: "Phone Number is Required" })
    .regex(/^[0-9]{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits",
    }),
});

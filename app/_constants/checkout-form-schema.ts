import { z } from "zod"

export const checkoutFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  street: z.string().min(2),
  building: z.string().min(1).max(4),
  entrance: z.string().max(2).optional(),
  floor: z.string().max(2).optional(),
  apt: z.string().max(4).optional(),
  doorbell: z.boolean().optional(),
  doorOutside: z.boolean().optional(),
  comment: z.string().max(90).optional(),
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>

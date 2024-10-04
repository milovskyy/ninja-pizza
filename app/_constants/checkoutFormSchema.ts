import { z } from "zod"

export const checkoutFormSchemaDelivery = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  street: z.string().min(2),
  building: z.string().min(1).max(4),
  pickupAddress: z.string().optional(),
  entrance: z.string().max(2).optional(),
  floor: z.string().max(2).optional(),
  apt: z.string().max(4).optional(),
  doorBell: z.boolean().default(false).optional(),
  doorOutside: z.boolean().default(false).optional(),
  comment: z.string().max(90).optional(),
})

export const checkoutFormSchemaPickup = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  comment: z.string().max(90).optional(),
  pickupAdress: z.string(),
})

export type CheckoutFormPickupValues = z.infer<typeof checkoutFormSchemaPickup>
export type CheckoutFormDeliveryValues = z.infer<
  typeof checkoutFormSchemaDelivery
>

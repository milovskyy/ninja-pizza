import { z } from "zod"

export const checkoutFormSchemaDelivery = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  // pickupAddress: z.string().optional(),
  street: z.string().min(2),
  building: z.string().min(1).max(5),
  entrance: z.string().max(2).optional(),
  floor: z.string().max(2).optional(),
  apt: z.string().max(4).optional(),
  doorBell: z.boolean().default(false).optional(),
  doorOutside: z.boolean().default(false).optional(),
  date: z.string(),
  time: z.string(),
  change: z.string().optional(),
  persons: z.string(),
  comment: z.string().max(210).optional(),
  paymentMethod: z.string(),
})

export const checkoutFormSchemaPickup = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  pickupAddress: z.string(),
  date: z.string(),
  time: z.string(),
  change: z.string().optional(),
  persons: z.string(),
  comment: z.string().max(210).optional(),
  paymentMethod: z.string(),
})

export type CheckoutFormPickupValues = z.infer<typeof checkoutFormSchemaPickup>
export type CheckoutFormDeliveryValues = z.infer<
  typeof checkoutFormSchemaDelivery
>

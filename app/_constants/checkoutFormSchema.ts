import { z } from "zod"

export const checkoutFormSchemaDelivery = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
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
  payment: z.string(),
})

export const checkoutFormSchemaPickup = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  address: z.string(),
  date: z.string(),
  time: z.string(),
  change: z.string().optional(),
  persons: z.string(),
  comment: z.string().max(210).optional(),
  payment: z.string(),
})

export const checkoutFormSchemaEditOrder = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z
    .string()
    .min(10, { message: "Make sure your phone number has at least 10 digits" }),
  address: z.string(),
  date: z.string(),
  time: z.string(),
  doorBell: z.boolean().default(false).optional(),
  doorOutside: z.boolean().default(false).optional(),
  change: z.string().optional(),
  persons: z.string(),
  comment: z.string().max(210).optional(),
  payment: z.string(),
})

export type CheckoutFormPickupValues = z.infer<typeof checkoutFormSchemaPickup>
export type CheckoutFormEditOrderValues = z.infer<
  typeof checkoutFormSchemaEditOrder
>
export type CheckoutFormDeliveryValues = z.infer<
  typeof checkoutFormSchemaDelivery
>

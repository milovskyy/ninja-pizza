import { z } from "zod"

export const AddressFormSchema = z.object({
  street: z.string().min(2),
  building: z.string().min(1).max(5),
  entrance: z.string().max(2).optional(),
  floor: z.string().max(2).optional(),
  apt: z.string().max(4).optional(),
  label: z.string(),
  customLabel: z.string().optional(),
})

export type CheckoutFormEditOrderValues = z.infer<typeof AddressFormSchema>

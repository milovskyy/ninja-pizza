"use client"

import { FormProvider, useForm } from "react-hook-form"
import { CheckoutOrderDetails } from "./CheckoutOrderDetails"
import { SignInModal } from "./SignInModal"
import { ErrorMessage } from "@hookform/error-message"
import { FormPersonalDetails } from "./FormPersonalDetails"
import { FormDeliveryDetails } from "./FormDeliveryDetails"
import { useState } from "react"
import MyForm from "./DeliveryTEST"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  checkoutFormSchemaDelivery,
  checkoutFormSchemaPickup,
} from "@/app/_constants/checkoutFormSchema"
import { FormDeliveryTime } from "./FormDeliveryTime"
import { FormPaymentMethod } from "./FormPaymentMethod"
import { FormComments } from "./FormComments"

type Props = {}

export type AuthType = {
  name: string
  phone: string
}

export const CheckoutForm = ({}: Props) => {
  const [method, setMethod] = useState("Delivery")
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm<AuthType>()

  const form = useForm({
    resolver: zodResolver(
      method === "Delivery"
        ? checkoutFormSchemaDelivery
        : checkoutFormSchemaPickup,
    ),
    defaultValues: {
      name: "",
      phone: "",
      building: "",
      entrance: "",
      floor: "",
      apt: "",
      doorBell: false,
      doorOutside: false,
      comment: "",
      pickupAdress: "Street 1",
      time: "The nearest time",
      date: "Today",
      paymentMethod: "cash",
      change: "",
      persons: "1",
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // тут формировать обьект с данными исходя из значения доставки (убирать ненужные поля если самовывоз)
  }
  // extends React.InputHTMLAttributes<HTMLInputElement> {}

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-3"
      >
        <div className="flex flex-col gap-5 bg-white p-6">
          <div className="">
            <h3 className="mb-3 text-sm tracking-wide text-stone-400">
              Log in to auto-fill your information for a faster pizza delivery!
            </h3>
            <SignInModal buttonText="Sign in with your phone number" />
          </div>
          <FormPersonalDetails />

          <FormDeliveryDetails method={method} setMethod={setMethod} />

          <FormDeliveryTime method={method} />
          <FormPaymentMethod />
          <FormComments />
        </div>
        <CheckoutOrderDetails method={method} />
      </form>
    </FormProvider>
  )
}

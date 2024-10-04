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
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/app/_constants/checkout-form-schema"

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

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      building: "",
      entrance: "",
      floor: "",
      apt: "",
      doorbell: false,
      doorOutside: false,
      comment: "",
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  // extends React.InputHTMLAttributes<HTMLInputElement> {}

  return (
    // <MyForm />
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

          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <CheckoutOrderDetails method={method} />
      </form>
    </FormProvider>
  )
}

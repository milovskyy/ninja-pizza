"use client"

import { FormProvider, useForm } from "react-hook-form"
import { use, useState } from "react"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import { CheckoutOrderDetails } from "./CheckoutOrderDetails"
import { SignInModal } from "./SignInModal"
import { FormPersonalDetails } from "./form/FormPersonalDetails"
import { FormDeliveryDetails } from "./form/FormDeliveryDetails"
import {
  checkoutFormSchemaDelivery,
  checkoutFormSchemaPickup,
} from "@/app/_constants/checkoutFormSchema"
import { FormDeliveryTime } from "./form/FormDeliveryTime"
import { FormPaymentMethod } from "./form/FormPaymentMethod"
import { FormComments } from "./form/FormComments"
import { useCart } from "@/app/_store/cart"
import { DELIVERYPRICE } from "@/app/_constants/constants"
import { createOrder } from "@/utils/actions"
import { format } from "date-fns"
import { useCartActions } from "@/hooks/useCartActions"
import { useRouter } from "next/navigation"

type Props = {}

export type AuthType = {
  name: string
  phone: string
}

export const CheckoutForm = ({}: Props) => {
  const [method, setMethod] = useState("Delivery")
  const { cart } = useCart()
  const { handleDeleteCart } = useCartActions()

  const router = useRouter()

  const cartTotalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const form = useForm({
    resolver: zodResolver(
      method === "Delivery"
        ? checkoutFormSchemaDelivery
        : checkoutFormSchemaPickup,
    ),
    defaultValues: {
      name: "",
      phone: "",
      street: "",
      building: "",
      entrance: "",
      floor: "",
      apt: "",
      doorBell: false,
      doorOutside: false,
      comment: "",
      pickupAddress: "Street 1",
      time: "The nearest time",
      paymentMethod: "cash",
      date: "Today",
      change: "",
      persons: "1",
    },
  })

  const onSubmit = async (data: any) => {
    let date = data.date
    if (data.date === "Today") date = format(new Date(), "dd-MM-yy")
    if (data.date === "Tomorrow")
      date = format(new Date(Date.now() + 86400000), "dd-MM-yy")
    const order = {
      id: NaN,
      created_at: format(new Date(), "yyyy-MM-dd HH:mm"),
      name: data.name,
      phone: data.phone,
      method: method,
      address:
        method === "Delivery"
          ? `${data.street} №${data.building}${data.entrance && `, entrance №${data.entrance}`}${data.apt && `, apt №${data.apt}`}${data.floor && `, floor №${data.floor}`}`
          : data.pickupAddress,
      choices: `${data.doorBell === true ? "Do not ring the doorbell" : ""}${data.doorOutside && data.doorBell ? ", " : ""}${data.doorOutside === true ? "Leave my order outside the door" : ""}`,
      date,
      time: data.time,
      change: data.change,
      persons: data.persons,
      comment: data.comment,
      payment: data.paymentMethod,
      paymentID: "",
      user: "1366ca27-ac43-4f9e-ac8d-d6193773bfa7",
      status: "Pending",
      items: JSON.stringify(cart),
      totalAmount:
        cartTotalPrice > 500 ? cartTotalPrice : cartTotalPrice + DELIVERYPRICE,
    }
    try {
      await createOrder(order)
      toast.success("Order successfully created")
      router.push("/")
    } catch (err: any) {
      console.log(err.message, "error from unSubmit")
    } finally {
      handleDeleteCart()
    }
  }

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
        <CheckoutOrderDetails
          method={method}
          cart={cart}
          cartTotalPrice={cartTotalPrice}
        />
      </form>
    </FormProvider>
  )
}

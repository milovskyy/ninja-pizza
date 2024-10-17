"use client"

import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import { CheckoutOrderDetails } from "./CheckoutOrderDetails"
import { SignInModal } from "./SignInModal"
import { FormPersonalDetails } from "./form/FormPersonalDetails"
import { FormDeliveryDetails } from "./form/FormDeliveryDetails"
import {
  checkoutFormSchemaDelivery,
  checkoutFormSchemaEditOrder,
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
import { OrderType } from "@/app/_types/TypeProduct"

type Props = {
  order?: OrderType
}

export type AuthType = {
  name: string
  phone: string
}

export const CheckoutForm = ({ order }: Props) => {
  const [method, setMethod] = useState(order?.method || "Delivery")
  const { cart } = useCart()
  const { handleDeleteCart } = useCartActions()

  const router = useRouter()

  const today = format(new Date(), "dd-MM-yy")
  const tomorrow = format(new Date(Date.now() + 86400000), "dd-MM-yy")

  const cartTotalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const form = useForm({
    resolver: zodResolver(
      order
        ? checkoutFormSchemaEditOrder
        : method === "Delivery"
          ? checkoutFormSchemaDelivery
          : checkoutFormSchemaPickup,
    ),
    defaultValues: {
      name: order?.name || "",
      phone: order?.phone || "",
      address: order?.address || "",
      street: "",
      building: "",
      entrance: "",
      floor: "",
      apt: "",
      doorBell: order?.choices.includes("Do not ring the doorbell")
        ? true
        : false,
      doorOutside: order?.choices.includes("Leave my order outside the door")
        ? true
        : false,
      comment: order?.comment || "",
      pickupAddress: order?.method === "Pickup" ? order?.address : "Street 1",
      time: order?.time || "The nearest time",
      payment: order?.payment || "cash",
      date:
        (order?.date === today
          ? "Today"
          : order?.date === tomorrow
            ? "Tomorrow"
            : order?.date) || "Today",
      change: order?.change || "",
      persons: order?.persons || "1",
    },
  })

  const onSubmit = async (data: any) => {
    let date = data.date
    if (data.date === "Today") date = format(new Date(), "dd-MM-yy")
    if (data.date === "Tomorrow")
      date = format(new Date(Date.now() + 86400000), "dd-MM-yy")
    const newOrder = {
      id: order?.id || NaN,
      created: order?.created || format(new Date(), "yyyy-MM-dd HH:mm"),
      updated: order ? format(new Date(), "yyyy-MM-dd HH:mm") : null,
      name: data.name,
      phone: data.phone,
      method: method,
      address:
        method === "Delivery"
          ? order
            ? data.address
            : `${data.street} №${data.building}${data.entrance && `, entrance №${data.entrance}`}${data.apt && `, apt №${data.apt}`}${data.floor && `, floor №${data.floor}`}`
          : data.address,
      choices: `${data.doorBell === true ? "Do not ring the doorbell" : ""}${data.doorOutside && data.doorBell ? ", " : ""}${data.doorOutside === true ? "Leave my order outside the door" : ""}`,
      date,
      time: data.time,
      change: data.change,
      persons: data.persons,
      comment: data.comment,
      payment: data.payment,
      paymentID: "",
      user: "1366ca27-ac43-4f9e-ac8d-d6193773bfa7",
      status: "Pending",
      items: JSON.stringify(cart),
      totalAmount:
        cartTotalPrice > 500 ? cartTotalPrice : cartTotalPrice + DELIVERYPRICE,
    }

    console.log(newOrder)
    // try {
    //   await createOrder(order)
    //   toast.success("Order successfully created")
    //   router.push("/")
    // } catch (err: any) {
    //   console.log(err.message, "error from unSubmit")
    // } finally {
    //   handleDeleteCart()
    // }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-3"
      >
        <div className="flex flex-col gap-5 bg-white p-6">
          {!order && (
            <div>
              <h3 className="mb-3 text-sm tracking-wide text-stone-400">
                Log in to auto-fill your information for a faster pizza
                delivery!
              </h3>
              <SignInModal buttonText="Sign in with your phone number" />
            </div>
          )}
          <FormPersonalDetails />
          <FormDeliveryDetails
            method={method}
            setMethod={setMethod}
            address={order?.address}
          />
          <FormDeliveryTime method={method} />
          <FormPaymentMethod />
          <FormComments />
        </div>
        <CheckoutOrderDetails
          method={method}
          cart={order ? JSON.parse(order.items) : cart}
          cartTotalPrice={cartTotalPrice}
          orderId={order?.id}
        />
      </form>
    </FormProvider>
  )
}

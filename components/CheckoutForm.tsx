"use client"

import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import { CheckoutOrderDetails } from "./CheckoutOrderDetails"
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
import { createOrder, updateOrder } from "@/utils/actions"
import { format } from "date-fns"
import { useCartActions } from "@/hooks/useCartActions"
import { useRouter } from "next/navigation"
import { OrderType, UserDeliveryAddress } from "@/app/_types/Types"
import { Button } from "./ui/button"
import { OrderAddProducts } from "./Orders/OrderAddProducts"
import { useUser } from "@/app/_store/user"
import { FormGoLogin } from "./form/FormGoLogin"

type Props = {
  order?: OrderType
  setIsopenModal?: (state: boolean) => void
  setStatus?: (state: string) => void
}

export type AuthType = {
  name: string
  phone: string
}

export const CheckoutForm = ({ order, setIsopenModal, setStatus }: Props) => {
  const [method, setMethod] = useState(order?.method || "Delivery")

  const [isloading, setIsloading] = useState(false)
  const [showAddProducts, setShowAddProducts] = useState(false)
  const { cart } = useCart()
  const { deleteCartAction } = useCartActions()

  const router = useRouter()

  const { user } = useUser()

  let userAddressList: UserDeliveryAddress[] = []

  if (user) {
    userAddressList = user?.address ? user.address : []
  }

  const today = format(new Date(), "dd-MM-yy")
  const tomorrow = format(new Date(Date.now() + 86400000), "dd-MM-yy")

  const cartTotalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  // address: order?.address || "",

  const form = useForm({
    resolver: zodResolver(
      order
        ? checkoutFormSchemaEditOrder
        : method === "Delivery"
          ? checkoutFormSchemaDelivery
          : checkoutFormSchemaPickup,
    ),
    values: {
      name: order?.name || user?.name || "",
      phone: order?.phone || user?.number?.slice(2) || "",
      date:
        (order?.date === today
          ? "Today"
          : order?.date === tomorrow
            ? "Tomorrow"
            : order?.date) || "Today",
      address: order?.address || "",
      building: userAddressList[0]?.address.building || "",
      street: userAddressList[0]?.address.street || "",
      entrance: userAddressList[0]?.address.entrance || "",
      floor: userAddressList[0]?.address.floor || "",
      apt: userAddressList[0]?.address.apt || "",
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
      change: order?.change || "",
      persons: order?.persons || "1",
    },
    defaultValues: {
      pickupAddress: order?.method === "Pickup" ? order?.address : "Street 1",
      persons: order?.persons || "1",
      address: order?.address || "",
      date:
        (order?.date === today
          ? "Today"
          : order?.date === tomorrow
            ? "Tomorrow"
            : order?.date) || "Today",
    },
  })

  const onSubmit = async (data: any) => {
    let date = data.date
    if (data.date === "Today") date = format(new Date(), "dd-MM-yy")
    if (data.date === "Tomorrow")
      date = format(new Date(Date.now() + 86400000), "dd-MM-yy")
    const newOrder = {
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
          : data.pickupAddress,
      // : data.pickupAddress,
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

    setIsloading(true)
    if (!order)
      try {
        await createOrder(newOrder)

        toast.success("Order successfully created")
        router.push("/")
      } catch (err: any) {
        toast.error(err.message)
      } finally {
        setTimeout(() => deleteCartAction(), 2000)
        setIsloading(false)
      }

    if (order)
      try {
        await updateOrder({ ...newOrder, id: order.id }, order?.id)

        toast.success("Order successfully updated")
        if (setStatus) setStatus("Pending")
      } catch (err: any) {
        toast.error(err.message)
      } finally {
        setIsloading(false)
        if (setIsopenModal && isloading === false) setIsopenModal(false)
      }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-3"
      >
        <div className="flex flex-col gap-5 bg-white p-6">
          {!order && !user && <FormGoLogin />}
          <FormPersonalDetails />
          <FormDeliveryDetails
            method={method}
            setMethod={setMethod}
            address={order?.address}
            user={user}
          />
          <FormDeliveryTime method={method} />
          <FormPaymentMethod />
          <FormComments />
        </div>
        <CheckoutOrderDetails
          method={method}
          cart={cart}
          cartTotalPrice={cartTotalPrice}
          orderId={order?.id}
          isloading={isloading}
        />
      </form>
      <div className="flex w-full flex-col">
        {order && (
          <Button
            className="mb-4 w-full"
            onClick={(e) => {
              e.preventDefault()
              setShowAddProducts((open) => !open)
            }}
          >
            Add more items
          </Button>
        )}
        {showAddProducts && <OrderAddProducts />}
        {showAddProducts && (
          <Button
            className="mb-4 w-full"
            onClick={(e) => {
              e.preventDefault()
              setShowAddProducts((open) => !open)
            }}
          >
            Add more items
          </Button>
        )}
      </div>
    </FormProvider>
  )
}

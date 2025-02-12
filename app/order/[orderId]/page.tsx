import { notFound } from "next/navigation"

import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"

import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

import { getOrder } from "@/utils/order-service"

import { OrderConfirmation } from "@/components/OrderConfirmation"
import { OrderConfirmationHeading } from "@/components/OrderConfirmationHeading"

type PropsType = {
  params: { orderId: string }
}

export const revalidate = 1000

export default async function Page({ params }: PropsType) {
  const { orderId } = params

  const order = await getOrder(Number(orderId))

  if (!order) return notFound()

  return (
    <Container className="str flex flex-col">
      <Navigation categoryName={`Order #${orderId}`} />
      <OrderConfirmationHeading id={orderId} />

      <OrderConfirmation order={order} />

      <div className="my-10">
        <MobileAppBanner />
      </div>
      <AppFooter />
    </Container>
  )
}

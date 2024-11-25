import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"

import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

import { cn } from "@/utils/utils"
import { getOrder } from "@/utils/order-service"

import { OrderConfirmation } from "@/components/OrderConfirmation"
import { OrderConfirmationHeading } from "@/components/OrderConfirmationHeading"
import { notFound } from "next/navigation"

type PropsType = {
  params: { orderId: string }
}

export const revalidate = 1000

export default async function Page({ params }: PropsType) {
  const { orderId } = params

  const order = await getOrder(Number(orderId))

  if (!order) return notFound()

  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex w-full flex-1 justify-center px-3",
      )}
    >
      <Container className="mt-[60px] flex flex-col md:mt-[68px] xl:mt-[84px]">
        <Navigation categoryName={`Order #${orderId}`} />
        <OrderConfirmationHeading id={orderId} />

        <OrderConfirmation order={order} />

        <div className="my-10">
          <MobileAppBanner />
        </div>
        <AppFooter />
      </Container>
    </div>
  )
}

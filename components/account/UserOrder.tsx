import { OrderType } from "@/app/_types/Types"

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { UserOrderPreview } from "./UserOrderPreview"
import { UserOrderDetails } from "./UserOrderDetails"
import { UserOrderCartDetails } from "./UserOrderCartDetails"

type Props = {
  order: OrderType
}

export const UserOrder = ({ order }: Props) => {
  return (
    <AccordionItem
      value={order.id.toString()}
      className="flex flex-col rounded-2xl bg-white"
    >
      <AccordionTrigger>
        <UserOrderPreview order={order} />
      </AccordionTrigger>
      <AccordionContent>
        <UserOrderDetails order={order} />
        <UserOrderCartDetails order={order} />
      </AccordionContent>
    </AccordionItem>
  )
}

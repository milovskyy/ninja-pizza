import { OrderType } from "@/app/_types/Types"

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { OrderDetails } from "./OrderDetails"

import { OrderPreview } from "./OrderPreview"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select"
import { ORDER_STATUSES } from "@/app/_constants/constants"
import { Button } from "../ui/button"
import { updateOrder } from "@/utils/actions"

type Props = {
  order: OrderType
}

export const Order = ({ order }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [status, setStatus] = useState(order.status)

  const handleSubmit = async () => {
    const updatedOrder = { ...order, status }
    await updateOrder(updatedOrder, order.id)
  }

  return (
    <>
      <AccordionItem
        value={order.id.toString()}
        className="flex flex-col bg-white"
      >
        <AccordionTrigger>
          <OrderPreview order={order} setDialogOpen={setDialogOpen} />
        </AccordionTrigger>
        <AccordionContent>
          <OrderDetails order={order} setStatus={setStatus} />
        </AccordionContent>
      </AccordionItem>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Update Status
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Select onValueChange={setStatus} value={status}>
              <SelectTrigger className="w-full bg-stone-100 font-semibold tracking-wide outline-none focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {ORDER_STATUSES.map((status) => (
                  <SelectItem
                    key={status}
                    value={status}
                    className="font-semibold tracking-wide"
                  >
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogTrigger className="flex items-center justify-center">
            <Button className="flex-1 py-2" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogTrigger>
        </DialogContent>
      </Dialog>
    </>
  )
}

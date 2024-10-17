import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { CheckoutForm } from "../CheckoutForm"
import { OrderType } from "@/app/_types/TypeProduct"

type Props = {
  order: OrderType
}

export const OrderEditModal = ({ order }: Props) => {
  //   console.log(order.choices.includes("Leave my order outside the door"))
  return (
    <div className="mt-5 flex justify-end">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="sell-end w-24 rounded-xl bg-stone-200 py-3 font-bold">
            Edit Order
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[800px] w-full max-w-7xl overflow-auto">
          <CheckoutForm order={order} />
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}

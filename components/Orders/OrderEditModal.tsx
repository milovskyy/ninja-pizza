import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { CheckoutForm } from "../CheckoutForm"
import { OrderType } from "@/app/_types/TypeProduct"
import { useCart } from "@/app/_store/cart"
import { useLocalStorage } from "react-use"
import { useState } from "react"

type Props = {
  order: OrderType
}

export const OrderEditModal = ({ order }: Props) => {
  const [isopenModal, setIsopenModal] = useState(false)
  const cart = JSON.parse(order.items)

  const { setCart, deleteCart } = useCart()
  const [value, setValue] = useLocalStorage("cart")

  const cartOnDialogOpen = (state: boolean) => {
    console.log("orr")
    if (state === true) {
      setCart(cart)
      setValue(cart)
    }
    if (state === false) {
      deleteCart()
      setValue([])
    }
    setIsopenModal(state)
  }

  return (
    <div className="mt-5 flex justify-end">
      <Dialog onOpenChange={cartOnDialogOpen} open={isopenModal}>
        <DialogTrigger asChild>
          <Button className="sell-end w-24 rounded-xl bg-stone-200 py-3 font-bold">
            Edit Order
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[800px] w-full max-w-7xl overflow-auto">
          <CheckoutForm order={order} setIsopenModal={cartOnDialogOpen} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

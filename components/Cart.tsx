"use client"

import { useCart } from "@/app/_store/cart"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { CartItem } from "./CartItem"

type Props = {}

export const Cart = ({}: Props) => {
  const { cart } = useCart()

  const cartTotalPrice = cart?.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div
      className={cn(
        "absolute right-0 top-20 flex h-[635px] max-h-[635px] w-[480px] flex-col overflow-hidden rounded-3xl",
      )}
    >
      <div className="flex flex-1 flex-col gap-3 bg-white first-line:pt-6">
        <h2 className="px-6 pt-6 text-xl font-bold">Your order</h2>
        <div className="flex max-h-[475px] flex-col gap-2 overflow-auto px-6 pb-2">
          {cart?.items.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
      </div>
      <div className="flex justify-between bg-primary p-6">
        <div className="gap2 flex flex-col">
          <h3 className="text-sm font-medium text-stone-600">Order amount:</h3>
          <div className="flex gap-2">
            <div className="text-xl font-bold text-stone-900">
              {cartTotalPrice}
            </div>
            <div className="text-sm font-medium text-stone-600">UAH</div>
          </div>
        </div>
        <Button className="bg-white font-extrabold hover:bg-white">
          Place an order
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useCart } from "@/app/_store/cart"
import { Button } from "./ui/button"
import { CartItem } from "./CartItem"
import Link from "next/link"

type Props = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Cart = ({ setIsCartOpen }: Props) => {
  const { cart } = useCart()

  const cartTotalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  console.log(cart)

  return (
    <>
      <div className="flex flex-1 flex-col gap-3 bg-white first-line:pt-6">
        <h2 className="px-6 pt-6 text-xl font-bold">Your order</h2>
        <div className="flex max-h-[475px] flex-col gap-2 overflow-auto px-6 pb-2">
          {cart?.map((item) => (
            <CartItem key={item.id} item={item} setIsCartOpen={setIsCartOpen} />
          ))}
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
        <Link href="/checkout">
          <Button
            className="bg-white font-extrabold hover:bg-white"
            onClick={() => setIsCartOpen(false)}
          >
            Checkout
          </Button>
        </Link>
      </div>
    </>
  )
}

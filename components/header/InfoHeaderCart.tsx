"use client"

import { useCart } from "@/app/_store/cart"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { useClickAway } from "react-use"

import { useRef, useState } from "react"
import { Cart } from "../Cart"
import { X } from "lucide-react"

function InfoHeaderCart() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const { cart } = useCart()
  const numberOfProducts = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  )

  const ref = useRef(null)
  useClickAway(ref, () => {
    if (isCartOpen) {
      setIsCartOpen(false)
    }
  })

  return (
    <>
      <div ref={ref} className="relative h-full w-full">
        {!isCartOpen ? (
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary pb-[2px]"
            onClick={() => setIsCartOpen(true)}
          >
            <LiaShoppingBagSolid size="28px" />
            <div className="absolute right-[5px] top-[5px] flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-red-50">
              {numberOfProducts}
            </div>
          </div>
        ) : (
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary"
            onClick={() => setIsCartOpen(false)}
          >
            <X />
          </div>
        )}
        {isCartOpen && <Cart />}
      </div>
      {isCartOpen && (
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/35 p-5" />
      )}
    </>
  )
}

export default InfoHeaderCart

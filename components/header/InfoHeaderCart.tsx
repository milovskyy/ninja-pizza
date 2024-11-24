"use client"

import { useCart } from "@/app/_store/cart"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { useClickAway } from "react-use"
import { usePathname } from "next/navigation"

import { useRef, useState } from "react"
import { Cart } from "../Cart"
import { X } from "lucide-react"
import { CartEmpty } from "../CartEmpty"

function InfoHeaderCart() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  const { cart } = useCart()

  const numberOfProducts = cart?.reduce((acc, item) => acc + item.quantity, 0)

  const ref = useRef(null)
  useClickAway(ref, () => {
    if (isCartOpen) {
      setIsCartOpen(false)
    }
  })

  if (pathname === "/checkout") return null

  return (
    <div className="h-10 w-10 items-center justify-center sm:flex xl:h-14 xl:w-14">
      <div ref={ref} className="h-full w-full">
        {!isCartOpen ? (
          <div
            className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary pb-[2px]"
            onClick={() => setIsCartOpen(true)}
          >
            <LiaShoppingBagSolid size="26px" />
            {numberOfProducts > 0 && (
              <div className="absolute right-[1px] top-[1px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-red-50 xl:h-6 xl:w-6 xl:text-sm">
                {numberOfProducts}
              </div>
            )}
          </div>
        ) : (
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary"
            onClick={() => setIsCartOpen(false)}
          >
            <X size="24px" />
          </div>
        )}
        {isCartOpen && (
          <div className="absolute right-0 top-[60px] flex max-h-[635px] w-full flex-col overflow-hidden rounded-3xl sm:right-3 sm:w-[480px] md:top-[68px] xl:top-[88px]">
            <div className="overflow-auto rounded-3xl bg-white">
              {numberOfProducts ? (
                <Cart setIsCartOpen={setIsCartOpen} />
              ) : (
                <CartEmpty setIsCartOpen={setIsCartOpen} />
              )}
            </div>
          </div>
        )}
      </div>
      {isCartOpen && (
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/35 p-5" />
      )}
    </div>
  )
}

export default InfoHeaderCart

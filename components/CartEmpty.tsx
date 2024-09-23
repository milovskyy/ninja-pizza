import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "./ui/button"
import { CartCategories } from "./CartCategories"

type Props = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartEmpty = ({ setIsCartOpen }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-3 bg-white px-6 py-10",
      )}
    >
      <h1 className="text-center text-xl font-bold tracking-wide text-stone-950">
        Your cart is empty
      </h1>
      <h3 className="text-center font-semibold tracking-wide text-stone-400">
        That needs fixing! Head to the menu and pick out a delicious pizza
      </h3>
      <CartCategories setIsCartOpen={setIsCartOpen} />

      <Link href={"/"}>
        <Button className="mt-2 text-[16px] font-bold">Your orders</Button>
      </Link>
    </div>
  )
}

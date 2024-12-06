"use client"

import { cn } from "@/utils/utils"
import { Menu } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { CartCategories } from "../CartCategories"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useUser } from "@/app/_store/user"

export const BurgerMenu = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { user } = useUser()

  const router = useRouter()

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 p-[10px] text-[16px] font-black transition sm:flex lg:hidden xl:h-14 xl:w-14",
          isDialogOpen && "rotate-90",
        )}
      >
        <Menu size={24} />
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] w-[98%] max-w-[98%] flex-col items-center justify-center gap-2 overflow-auto rounded-3xl p-3 py-4 outline-none lg:hidden">
        <p className="text-xl font-semibold">Menu</p>
        <CartCategories setIsCartOpen={setIsDialogOpen} />
        <div className="grid w-full grid-cols-2 gap-2">
          <Button
            variant={"burger"}
            size={"burger"}
            onClick={() => {
              router.push("/account/favorites")
              setIsDialogOpen(false)
            }}
          >
            Favorites
          </Button>

          <Button
            variant={"burger"}
            size={"burger"}
            onClick={() => {
              router.push("/account")
              setIsDialogOpen(false)
            }}
          >
            Account
          </Button>

          <Button
            variant={"burger"}
            size={"burger"}
            onClick={() => {
              router.push("/")
              setIsDialogOpen(false)
            }}
          >
            Home
          </Button>
          <Button
            variant={"burger"}
            size={"burger"}
            onClick={() => {
              router.push("/about")
              setIsDialogOpen(false)
            }}
          >
            About
          </Button>
          {user?.role === "admin" && (
            <Button
              variant={"burger"}
              size={"burger"}
              onClick={() => {
                router.push("/orders")
                setIsDialogOpen(false)
              }}
            >
              Orders
            </Button>
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded-2xl bg-gray-100 p-2">
          <Button
            variant={"phone"}
            size={"phone"}
            className="self-center max-xs:text-sm"
          >
            {"+38 (095) 344 22 44"}
          </Button>
          <Button
            variant={"phone"}
            size={"phone"}
            className="self-center max-xs:text-sm"
          >
            {"+38 (067) 344 22 44"}
          </Button>
          <Button
            variant={"phone"}
            size={"phone"}
            className="self-center max-xs:text-sm"
          >
            {" +38 (063) 344 22 44"}
          </Button>

          <p className="max-w-52 px-2 text-center text-sm text-stone-400">
            Call us from 11:00 to 22:30 seven days a week
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

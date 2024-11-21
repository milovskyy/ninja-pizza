"use client"

import { cn } from "@/utils/utils"
import { Menu } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export const BurgerMenu = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger
        className={cn(
          // h-10 w-10 items-center justify-center sm:flex xl:h-14 xl:w-14
          "flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 p-3 text-[16px] font-black transition sm:flex lg:hidden xl:h-14 xl:w-14",
          isDialogOpen && "rotate-90",
        )}
      >
        <Menu />
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center rounded-none px-16 py-10 outline-none">
        <DialogHeader className="mb-2 gap-3">
          <DialogTitle className="text-center text-4xl font-bold">
            Sign in
          </DialogTitle>
          <DialogDescription className="text-normal text-stone-400">
            Please enter your phone number and password
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

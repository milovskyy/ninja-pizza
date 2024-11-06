"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "../ui/button"

import { UserDeliveryAddress } from "@/app/_types/Types"
import { BriefcaseBusiness, House, Star } from "lucide-react"

import { cn } from "@/utils/utils"
import { useUser } from "@/app/_store/user"

type Props = {
  userAddressList: UserDeliveryAddress[]
}

export const FormAddressSelectModal = ({ userAddressList }: Props) => {
  const [selected, setSelected] = useState(userAddressList[0].id)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { user, setUser } = useUser()

  const handleSelect = (id: string) => {
    function moveToFront(array: UserDeliveryAddress[], id: string) {
      const index = array.findIndex((item) => item.id === id)

      if (index !== -1) {
        const [selectedItem] = array.splice(index, 1)
        array.unshift(selectedItem)
      }

      return array
    }

    const newList = moveToFront([...userAddressList], id)
    setUser({ ...user, address: newList })

    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Button
        className="flex gap-1 py-4 font-semibold"
        onClick={(e) => {
          e.preventDefault()
          setIsDialogOpen(true)
        }}
      >
        Change
      </Button>

      <DialogContent className="flex max-w-[500px] flex-col items-center justify-center rounded-none p-10 outline-none">
        <DialogHeader className="mb-2 gap-3">
          <DialogTitle className="text-center text-3xl font-bold leading-snug">
            Choose delivery address
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-2">
          {userAddressList.map((userAddress) => (
            <div
              className="flex cursor-pointer items-center gap-5 rounded-3xl bg-stone-100 p-5"
              key={userAddress.id}
              onClick={() => setSelected(userAddress.id)}
            >
              <div className="text-stone-400">
                {userAddress.name === "Home" ? (
                  <House />
                ) : userAddress.name === "Work" ? (
                  <BriefcaseBusiness />
                ) : (
                  <Star />
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <p className="font-bold">{userAddress.name}</p>
                <p className="text-sm font-semibold text-stone-400">
                  {`${userAddress.address.street}, ${userAddress.address.building}`}
                </p>
              </div>

              <div
                className={cn(
                  "flex aspect-square h-6 w-6 items-center justify-center rounded-full border border-stone-300 bg-white ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  userAddress.id === selected && "border-main",
                )}
              >
                {userAddress.id === selected && (
                  <div className="h-4 w-4 rounded-full bg-main"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button
          className="mt-3 w-full text-[16px] font-bold text-black"
          onClick={() => handleSelect(selected)}
        >
          Select
        </Button>
      </DialogContent>
    </Dialog>
  )
}

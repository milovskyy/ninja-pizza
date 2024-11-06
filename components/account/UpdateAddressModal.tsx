"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useForm, FormProvider } from "react-hook-form"
import toast from "react-hot-toast"

import { Button } from "../ui/button"
import { updateUserAddress } from "@/utils/actions"
import { FormAddressDetails } from "../form/FormAddressDetails"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressFormSchema } from "@/app/_constants/addressFormSchema"
import { UpdateAddressRadioGroup } from "./UpdateAddressRadioGroup"
import { UserDeliveryAddress, UserType } from "@/app/_types/Types"
import { PencilLine, Trash2 } from "lucide-react"

export type AddressType = {
  street?: string
  building?: string
  entrance?: string
  floor?: string
  apt?: string
  label: string
  customLabel?: string
}

type Props = {
  user: UserType
  userAddressId?: string
}

export const UpdateAddressModal = ({
  user: currentUser,
  userAddressId,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  let userAddressList: UserDeliveryAddress[] = []

  if (currentUser.address) userAddressList = currentUser.address

  const updatingAddress = userAddressList.find(
    (userAddress) => userAddress.id === userAddressId,
  )

  const form = useForm<AddressType>({
    resolver: zodResolver(AddressFormSchema),
    values: {
      street: updatingAddress?.address.street || "",
      building: updatingAddress?.address.building || "",
      entrance: updatingAddress?.address.entrance || "",
      floor: updatingAddress?.address.floor || "",
      apt: updatingAddress?.address.apt || "",
      label:
        updatingAddress?.name &&
        updatingAddress?.name !== "Home" &&
        updatingAddress?.name !== "Work"
          ? "Location"
          : updatingAddress?.name || "Home",
      customLabel: updatingAddress?.name || "",
    },
  })

  async function onSubmit({
    street,
    building,
    entrance,
    floor,
    apt,
    label,
    customLabel,
  }: AddressType) {
    if (!street || !building || !currentUser?.id) return

    let newAddressList

    if (!userAddressId) {
      const newAddress = {
        id: crypto.randomUUID(),
        name: label === "Location" ? customLabel || label : label,
        address: {
          street,
          building,
          entrance,
          floor,
          apt,
        },
      }
      newAddressList = [...userAddressList, newAddress]
    }

    if (userAddressId) {
      newAddressList = userAddressList.map((userAddress) => {
        if (userAddress.id === userAddressId) {
          userAddress.name = label === "Location" ? customLabel || label : label
          userAddress.address = {
            street,
            building,
            entrance: entrance || "",
            floor: floor || "",
            apt: apt || "",
          }
        }
        return userAddress
      })
    }

    if (!newAddressList) {
      toast.error("Something went wrong")
      return
    }
    try {
      setIsLoading(true)
      const result = await updateUserAddress(newAddressList, currentUser.id)
      if (result.success) {
        toast.success("Address successfully updated")
        setIsDialogOpen(false)
        form.reset()
      }
      if (!result.success) {
        toast.error(result?.message || "Something went wrong")
      }
    } catch (e: any) {
      toast.error(e?.message)
    } finally {
      setIsLoading(false)
    }
  }

  const onCancel = () => {
    form.reset()
    setIsDialogOpen(false)
  }

  const handleDelete = async () => {
    if (!currentUser?.id) return
    const newAddressList = userAddressList.filter(
      (userAddress) => userAddress.id !== userAddressId,
    )

    try {
      const result = await updateUserAddress(newAddressList, currentUser.id)
      if (result.success) {
        toast.success("Address successfully updated")
        setIsDialogOpen(false)
        form.reset()
      }
      if (!result.success) {
        toast.error(result?.message || "Something went wrong")
      }
    } catch (e: any) {
      toast.error(e?.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {!userAddressId ? (
        <Button
          className="flex gap-1 py-4 font-semibold"
          onClick={() => setIsDialogOpen(true)}
        >
          <span className="text-xl">+</span> Add address
        </Button>
      ) : (
        <div
          className="cursor-pointer text-stone-400 hover:text-main"
          onClick={() => setIsDialogOpen(true)}
        >
          <PencilLine />
        </div>
      )}
      <DialogContent className="flex max-w-[500px] flex-col items-center justify-center rounded-none p-10 outline-none">
        <DialogHeader className="mb-2 gap-3">
          <DialogTitle className="text-center text-3xl font-bold leading-snug">
            {userAddressId ? "Edit" : "Add"} your address
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <form
            className="flex w-full flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormAddressDetails />
            <UpdateAddressRadioGroup />
            <Button
              className="mt-3 w-full text-[16px] font-bold text-black"
              disabled={isLoading}
            >
              Save
            </Button>
            <Button
              className="w-full bg-gray-100 text-[16px] font-bold text-black hover:bg-gray-200"
              onClick={(e) => {
                e.preventDefault()
                onCancel()
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
            {userAddressId && (
              <Button
                className="items-center gap-3 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  handleDelete()
                }}
              >
                <Trash2 />

                <p className="font-bold">Delete address</p>
              </Button>
            )}
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

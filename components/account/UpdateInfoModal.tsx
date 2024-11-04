"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useForm, FormProvider } from "react-hook-form"
import toast from "react-hot-toast"

import { Button } from "../ui/button"
import { FormInput } from "@/components/form/FormInput"
import { PencilLine } from "lucide-react"
import { updateUser } from "@/utils/actions"
import { useUser } from "@/app/_store/user"

export type AuthType = {
  name: string
  email: string
}

export const UpdateInfoModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { user: currentUser, setUser } = useUser()

  const form = useForm<AuthType>({
    values: { name: currentUser?.name || "", email: currentUser?.email || "" },
  })

  async function onSubmit({ name, email }: AuthType) {
    if (!name || !email || !currentUser?.id) return

    try {
      setIsLoading(true)
      const user = {
        name,
        email,
      }
      const updatedUser = await updateUser(user, currentUser.id)

      setUser(updatedUser)

      toast.success("User successfully updated")
      setIsDialogOpen(false)
      setIsLoading(false)
      form.reset()
    } catch (e: any) {
      toast.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const onCancel = () => {
    form.reset()
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="p-1 px-3 text-stone-400">
        <PencilLine />
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col items-center justify-center rounded-none p-10 outline-none">
        <DialogHeader className="mb-2 gap-3">
          <DialogTitle className="text-center text-4xl font-bold leading-snug">
            Update personal information
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <form
            className="flex w-full flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormInput label="Name" name="name" max={24} />
            <FormInput label="Email" name="email" max={25} />
            <Button
              className="mt-5 w-full text-[16px] font-bold text-black"
              disabled={isLoading}
            >
              Save
            </Button>
            <Button
              className="w-full bg-gray-100 text-[16px] font-bold text-black hover:bg-gray-200"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

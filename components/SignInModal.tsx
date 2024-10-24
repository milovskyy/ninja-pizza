"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { createUser, loginAction, signupAction } from "@/utils/actions"
import Image from "next/image"
import { useForm, Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import toast from "react-hot-toast"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "./ui/button"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

type Props = {
  buttonText: string
}

export type AuthType = {
  phone: string
  password: string
}

export const SignInModal = ({ buttonText }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<AuthType>()

  const router = useRouter()

  // async function onSubmit({ phone, password }: AuthType) {
  //   if (!phone || !password) return

  //   const phoneNumber = "380" + phone.replace(/\D/g, "")

  //   try {
  //     setIsLoading(true)
  //     const { user } = await signupAction({
  //       phone: phoneNumber,
  //       password,
  //     })

  //     if (user) {
  //       const newUser = {
  //         created_at: format(new Date(), "yyyy-MM-dd HH:mm"),
  //         id: user.id,
  //         number: user.phone,
  //       }
  //       await createUser(newUser)
  //     }

  //     toast.success("User successfully created")
  //     setIsDialogOpen(false)
  //     reset()
  //     router.refresh()
  //   } catch (e: any) {
  //     if (e.message === "User already registered") {
  //       try {
  //         const user = await loginAction({
  //           phone: phoneNumber,
  //           password,
  //         })
  //         toast.success("User successfully logged in")
  //         setIsDialogOpen(false)
  //         reset()
  //         router.refresh()
  //       } catch (e: any) {
  //         toast.error(e.message)
  //       }
  //       return
  //     }
  //     toast.error(e.message)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  async function onSubmit({ phone, password }: AuthType) {
    if (!phone || !password) return

    const phoneNumber = "380" + phone.replace(/\D/g, "")

    setIsLoading(true)

    try {
      // Попытка войти в систему
      const { user } = await loginAction({
        phone: phoneNumber,
        password,
      })

      if (user) {
        toast.success("User successfully logged in")
        setIsDialogOpen(false)
        reset()
        router.refresh()
      }
    } catch (e: any) {
      // if (e.message === "Invalid login credentials") {
      //   try {
      //     const { user } = await signupAction({
      //       phone: phoneNumber,
      //       password,
      //     })

      //     if (user) {
      //       const newUser = {
      //         created_at: format(new Date(), "yyyy-MM-dd HH:mm"),
      //         id: user.id,
      //         number: user.phone,
      //       }
      //       await createUser(newUser)
      //       toast.success("User successfully created")
      //       setIsDialogOpen(false)
      //       reset()
      //       router.refresh()
      //     }
      //   } catch (error: any) {
      //     toast.error(error?.message || "Registration failed")
      //   }
      // } else {
      // }
      toast.error(e?.message || "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="w-full rounded-full bg-primary p-3 text-[16px] font-black hover:bg-main">
        {buttonText}
      </DialogTrigger>
      <DialogContent className="flex w-full flex-col items-center justify-center rounded-none px-16 py-10 outline-none">
        <DialogHeader className="mb-2 gap-3">
          <DialogTitle className="text-center text-4xl font-bold">
            Sign in
          </DialogTitle>
          <DialogDescription className="text-normal text-stone-400">
            Please enter your phone number and password
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {errors?.phone && (
            <div className="text-sm text-red-500">
              <ErrorMessage errors={errors} name="phone" />
            </div>
          )}
          <div className="mb-5 flex gap-2">
            <div className="flex gap-2 rounded-lg bg-stone-100 p-4">
              <div className="flex items-center justify-center">
                <Image
                  src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/ukraine.svg"
                  alt="phone"
                  width={20}
                  height={16}
                />
              </div>
              <div className="font-bold">+380</div>
            </div>
            <input
              className="flex-1 rounded-lg bg-stone-100 p-4 font-bold outline-none [appearance:textfield] placeholder:font-thin [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="tel"
              placeholder="Phone number"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 12,
                  message: "Make sure your phone number has at least 9 digits",
                },
                onChange: (e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "")
                  const formattedValue = value
                    .replace(/(\d{7})/, "$1 ")
                    .replace(/(\d{2})(\d{0,3})/, "$1 $2")
                    .replace(/(\d{3})(\d{0,2})/, "$1 $2")
                    .trim()
                    .slice(0, 12)
                  e.target.value = formattedValue
                },
              })}
            />
          </div>

          {errors?.password && (
            <div className="text-sm text-red-500">
              <ErrorMessage errors={errors} name="password" />
            </div>
          )}
          <Controller
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
                message: "Please enter your password",
              },
              minLength: {
                value: 6,
                message: "Make sure your password has at least 6 digits",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                containerClassName="flex  justify-between  gap-3 text-2xl mb-5 "
                onChange={onChange}
                value={value}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPGroup key={index}>
                    <InputOTPSlot
                      index={index}
                      className="h-12 w-12 text-xl font-semibold"
                    />
                  </InputOTPGroup>
                ))}
              </InputOTP>
            )}
          />

          <Button className="w-full text-[16px] font-bold" disabled={isLoading}>
            Sign up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

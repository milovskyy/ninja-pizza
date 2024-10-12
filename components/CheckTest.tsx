"use client"

import { cn } from "@/utils/utils"

type Props = {}

export const CheckTest = ({}: Props) => {
  const handleClick = () => {
    alert("в валенсии всё говно")
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="w-[20vw] bg-blue-500 p-2 text-white transition-transform duration-300 ease-in-out hover:translate-x-[30%] hover:bg-orange-500"
        onClick={handleClick}
      >
        осада боралуса +15
      </button>
    </div>
  )
}

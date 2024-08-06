"use client"

import { cn } from "@/lib/utils"

type PropsType = {
  number: string
  className?: string
}

function ButtonPhoneCall({ number, className }: PropsType) {
  return (
    <div className="inline-flex">
      <div
        // className={`inline-flex cursor-pointer px-2 font-semibold text-stone-800 hover:text-main ${className}`}
        className={cn(
          "inline-flex cursor-pointer px-2 font-semibold text-stone-800 hover:text-main",
          className,
        )}
      >
        {number}
      </div>
    </div>
  )
}

export default ButtonPhoneCall

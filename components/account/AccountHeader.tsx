"use client"

import { usePathname } from "next/navigation"
import React from "react"

export const AccountHeader = () => {
  const pathname = usePathname()
  let subPath = ""
  if (pathname.startsWith("/account/")) {
    subPath = pathname.split("/account/")[1] || ""
  }
  return (
    <h1 className="text-5xl font-black">
      {subPath.charAt(0).toUpperCase() + subPath.slice(1)}
    </h1>
  )
}

"use client"

import { cn } from "@/utils/utils"
import { sub } from "date-fns"
import { History, MapPinHouse } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GoHeart } from "react-icons/go"

type Props = {}

export const AccountNav = ({}: Props) => {
  const pathname = usePathname()
  let subPath = ""
  if (pathname.startsWith("/account/")) {
    subPath = pathname.split("/account/")[1] || ""
  }
  return (
    <div className="flex w-full flex-col gap-1">
      <Link
        href="/account/orders"
        className={cn(
          "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2",
          subPath === "orders" && "bg-stone-100",
        )}
      >
        <History color="#ffc700" size={22} />
        <p className="font-semibold">Orders</p>
      </Link>
      <Link
        href="/account/favorites"
        className={cn(
          "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2",
          subPath === "favorites" && "bg-stone-100",
        )}
      >
        <GoHeart color="#ffc700" size={22} />
        <p className="font-semibold">Favorites</p>
      </Link>
      <Link
        href="/account/address"
        className={cn(
          "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2",
          subPath === "address" && "bg-stone-100",
        )}
      >
        <MapPinHouse color="#ffc700" size={22} />
        <p className="font-semibold">Address</p>
      </Link>
    </div>
  )
}

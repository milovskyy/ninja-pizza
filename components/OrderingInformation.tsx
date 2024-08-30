import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {}

export const OrderingInformation = ({}: Props) => {
  return (
    <div className={cn("my-10 grid grid-cols-3 gap-5 px-2")}>
      <div className="flex items-center justify-center gap-5 rounded-3xl bg-white p-5">
        <div className="relative flex aspect-square h-12 items-center justify-center">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/delivery.svg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">Delivery</div>
          <div className="text-sm font-medium text-stone-400">
            Free from 500 UAH
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 rounded-3xl bg-white p-5">
        <div className="relative flex aspect-square h-12 items-center justify-center">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/clock.svg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">Working hours:</div>
          <div className="text-sm font-medium text-stone-400">
            from 11:00 to 22:30
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 rounded-3xl bg-white p-5">
        <div className="relative flex aspect-square h-12 items-center justify-center">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/map.svg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">Delivery zone</div>
          <Link href="/" className="text-sm font-medium text-stone-400">
            View on the map
          </Link>
        </div>
      </div>
    </div>
  )
}

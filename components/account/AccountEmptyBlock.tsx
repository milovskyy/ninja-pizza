import { cn } from "@/utils/utils"
import Image from "next/image"

type Props = {
  title: string
  subtitle: string
  page: string
}

export const AccountEmptyBlock = ({ title, subtitle, page }: Props) => {
  return (
    <div
      className={cn(
        "grid w-full flex-1 grid-cols-[2fr_3fr] items-center gap-1 rounded-3xl bg-white px-2 py-6 sm:px-2 lg:gap-5 lg:px-8",
      )}
    >
      <Image
        src={`https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/account/${page}Empty.svg`}
        alt="img"
        width={375}
        height={200}
      />

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-black md:text-2xl lg:text-4xl">{title}</h2>
        <p className="font-semibold text-stone-500 max-lg:text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

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
        "grid w-full grid-cols-[2fr_3fr] items-center gap-5 rounded-3xl bg-white px-10 py-6",
      )}
    >
      <Image
        src={`https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/account/${page}Empty.svg`}
        alt="img"
        width={375}
        height={200}
      />

      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-black">{title}</h2>
        <p className="font-semibold text-stone-500">{subtitle}</p>
      </div>
    </div>
  )
}

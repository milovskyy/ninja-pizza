import Image from "next/image"
import MobileAppIcons from "../MobileAppIcons"
import { Button } from "@/components/ui/button"
import Logo from "../Logo"
import Link from "next/link"

function MakeOrder() {
  return (
    <div className="my-4 py-4 xl:my-10">
      <h1 className="mb-5 px-3 text-2xl font-bold max-lg:text-center sm:text-3xl md:text-4xl lg:text-5xl">
        How to make an order?
      </h1>
      <p className="mb-5 px-3 font-semibold text-stone-700 max-lg:text-center">
        Choose the method you like
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6 md:gap-5 md:p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-comp.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center font-bold md:text-xl">
            On the website
          </div>

          <Link
            href="/"
            className="min-w-[156px] items-center justify-center py-2 md:flex"
          >
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
              quality={100}
              width={156}
              height={40}
              alt="The Ninja Pizza logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-phone.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center font-bold md:text-xl">
            Via mobile app
          </div>
          <div className="py-2">
            <MobileAppIcons className="h-[40px] w-[125px] max-xs:h-[30px] max-xs:w-[95px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-call.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center font-bold md:text-xl">
            By phone
          </div>
          <div className="grid w-full items-center gap-2 py-1 max-xl:place-items-center xl:grid-cols-2">
            <Button
              variant={"phone"}
              size={"phone"}
              className="w-[180px] rounded-full bg-stone-200 py-1 hover:bg-primary hover:text-stone-800 max-xs:text-sm"
            >
              +38 (095) 344 22 44
            </Button>
            <Button
              variant={"phone"}
              size={"phone"}
              className="w-[180px] rounded-full bg-stone-200 py-1 hover:bg-primary hover:text-stone-800 max-xs:text-sm"
            >
              +38 (067) 344 22 44
            </Button>
            <Button
              variant={"phone"}
              size={"phone"}
              className="w-[180px] rounded-full bg-stone-200 py-1 hover:bg-primary hover:text-stone-800 max-xs:text-sm"
            >
              +38 (063) 344 22 44
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeOrder

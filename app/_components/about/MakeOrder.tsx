import Image from "next/image"
import Logo from "../Logo"
import MobileAppIcons from "../MobileAppIcons"
import ButtonPhoneCall from "../footer/ButtonPhoneCall"

function MakeOrder() {
  return (
    <div className="my-10 py-4">
      <h1 className="mb-5 text-5xl font-bold">How to make an order?</h1>
      <p className="mb-5 font-semibold text-stone-700">
        Choose the method you like
      </p>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-5">
        <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-comp.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            On the website
          </div>
          <div className="py-2">
            <Logo />
          </div>
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
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            Via mobile app
          </div>
          <div className="py-2">
            <MobileAppIcons className="h-[40px] w-[125px]" />
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
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            By phone
          </div>
          <div className="grid grid-cols-2 gap-2 py-1">
            <ButtonPhoneCall
              number="+38 (095) 344 22 44"
              className="rounded-full bg-stone-200 py-1 hover:bg-main hover:text-stone-800"
            />
            <ButtonPhoneCall
              number="+38 (067) 344 22 44"
              className="rounded-full bg-stone-200 py-1 hover:bg-main hover:text-stone-800"
            />
            <ButtonPhoneCall
              number="+38 (063) 344 22 44"
              className="rounded-full bg-stone-200 py-1 hover:bg-main hover:text-stone-800"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeOrder

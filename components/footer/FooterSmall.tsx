import Image from "next/image"
import SocialMediaBlock from "./SocialMediaBlock"
import PlaceOrder from "./PlaceOrder"
import WebsiteMap from "./WebsiteMap"
import Link from "next/link"

export const FooterSmall = () => {
  return (
    <div className="flex-col px-1 pb-12 pt-4 max-md:flex md:hidden">
      <div className="mb-8 flex flex-col items-center justify-center gap-3">
        <div className="relative flex h-10 w-40 items-center justify-center xs:h-14 xs:w-[220px]">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
            quality={100}
            fill
            className="object-cover"
            alt="The Ninja Pizza logo"
          />
        </div>

        <div className="max-w-[450px] px-5 text-center font-semibold text-stone-400">
          Cheese, meat, vegetarian, shrimp and salmon pizza. Ninja Pizza has
          everything you need!
        </div>
      </div>

      <div className="mb-10 flex justify-between gap-10 pl-3">
        {/* <div className="mb-10 flex justify-between gap-10 pl-3"> */}
        <div className="flex flex-col justify-between gap-5">
          <WebsiteMap />
          <div className="flex flex-col gap-3 px-2">
            <p className="text-sm font-semibold text-stone-400">
              Working hours:
            </p>
            <p className="font-semibold text-stone-800 max-lg:text-sm md:px-1">
              from 11:00 to 22:30
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <PlaceOrder />
          <div className="flex flex-col gap-3 md:px-2">
            <p className="text-sm font-semibold text-stone-400">
              Find us on social media:
            </p>

            <SocialMediaBlock />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-x-4 xs:gap-x-16"> */}

      <div className="mb-5 flex flex-col items-center justify-center gap-4 border-t border-t-stone-200 pt-6">
        <Link
          href="/terms"
          className="text-sm font-semibold text-stone-400 hover:text-stone-800"
        >
          Terms of use
        </Link>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/payments.png"
          quality={100}
          width={162}
          height={31}
          alt="payments"
        />
        <div className="text-sm font-semibold text-stone-400">
          © Ninja Pizza. All rights reserved.
        </div>
      </div>
    </div>
  )
}

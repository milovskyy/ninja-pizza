import Image from "next/image"
import Link from "next/link"

import { SiInstagram, SiTelegram, SiFacebook } from "react-icons/si"

import ButtonPhoneCall from "./ButtonPhoneCall"

function AppFooter() {
  return (
    <div className="flex max-w-[1304px] flex-col items-center bg-white px-3 py-12">
      <div className="grid w-full grid-cols-[6fr_2fr_3fr_2.5fr] gap-24 pb-12">
        <div className="flex flex-col px-3">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
            quality={100}
            width={156}
            height={40}
            className="mb-4"
            alt="The Ninja Pizza logo"
          />

          <div className="mb-6 font-semibold text-stone-400">
            Cheese, meat, vegetarian, shrimp and salmon pizza. Ninja Pizza has
            everything you need!
          </div>
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/payments.png"
            quality={100}
            width={162}
            height={31}
            alt="The Ninja Pizza logo"
          />
        </div>
        {/* //////////////// */}
        <div className="flex flex-col gap-4">
          <p className="px-2 text-sm text-stone-400">Website map:</p>
          <div className="inline-flex">
            <Link
              href="/"
              className="inline-flex px-2 font-semibold text-stone-800 hover:text-main"
            >
              Home
            </Link>
          </div>
          <div className="inline-flex">
            <Link
              href="/about"
              className="inline-flex px-2 font-semibold text-stone-800 hover:text-main"
            >
              About
            </Link>
          </div>
          <div className="inline-flex">
            <Link
              href="/news"
              className="inline-flex px-2 font-semibold text-stone-800 hover:text-main"
            >
              News
            </Link>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="flex flex-col gap-4">
          <p className="px-2 text-sm text-stone-400">Place an order:</p>
          <ButtonPhoneCall number="+38 (095) 344 22 44" />
          <ButtonPhoneCall number="+38 (067) 344 22 44" />
          <ButtonPhoneCall number="+38 (063) 344 22 44" />

          <p className="px-2 text-sm text-stone-400">
            Call us from 11:00 to 22:30 seven days a week
          </p>
        </div>
        {/* /////////////////////// */}
        <div className="flex flex-col gap-4">
          <p className="px-2 text-sm text-stone-400">Working hours:</p>
          <p className="mb-10 px-2 font-semibold text-stone-800">
            from 11:00 to 22:30
          </p>
          <p className="px-2 text-sm text-stone-400">
            Find us on social media:
          </p>

          <div className="flex gap-2">
            <Link
              href="/facebook"
              className="px-2 font-semibold text-stone-500 hover:text-stone-900"
            >
              <SiTelegram size="24px" />
            </Link>
            <Link
              href="/facebook"
              className="px-2 font-semibold text-stone-500 hover:text-stone-900"
            >
              <SiFacebook size="24px" />
            </Link>
            <Link
              href="/facebook"
              className="px-2 font-semibold text-stone-500 hover:text-stone-900"
            >
              <SiInstagram size="24px" />
            </Link>
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////// */}
      {/* //////////////////////////////////////////// */}
      {/* //////////////////////////////////////////// */}
      {/* //////////////////////////////////////////// */}
      <div className="flex w-full justify-between border-t border-stone-300 pt-7 font-semibold">
        <div className="text-sm text-stone-400">
          © Ninja Pizza. All rights reserved.
        </div>
        <Link
          href="/terms"
          className="text-sm text-stone-400 hover:text-stone-800"
        >
          Terms of use
        </Link>
      </div>
    </div>
  )
}

export default AppFooter

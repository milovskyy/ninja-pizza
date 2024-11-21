import Link from "next/link"

import WorkingHours from "./WorkingHours"
import PlaceOrder from "./PlaceOrder"
import WebsiteMap from "./WebsiteMap"
import FooterAbout from "./About"
import Image from "next/image"
import SocialMediaBlock from "./SocialMediaBlock"

function AppFooter() {
  return (
    <>
      <div className="b hidden flex-col items-center px-1 py-12 md:flex">
        <div className="flex w-full justify-between gap-2 pb-12">
          <FooterAbout />
          <WebsiteMap />
          <PlaceOrder />
          <WorkingHours />
        </div>

        <div className="font-semibol flex w-full justify-between border-t border-stone-300 px-3 pt-7">
          <div className="text-sm font-semibold text-stone-400">
            © Ninja Pizza. All rights reserved.
          </div>
          <Link
            href="/terms"
            className="text-sm font-semibold text-stone-400 hover:text-stone-800"
          >
            Terms of use
          </Link>
        </div>
      </div>
      <div className="flex-col px-1 py-12 max-md:flex md:hidden">
        <div className="mb-8 flex flex-col items-center justify-center gap-3">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
            quality={100}
            width={200}
            height={40}
            className="mb-4"
            alt="logo"
          />

          <div className="max-w-[450px] px-5 text-center font-semibold text-stone-400">
            Cheese, meat, vegetarian, shrimp and salmon pizza. Ninja Pizza has
            everything you need!
          </div>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-x-24">
          <WebsiteMap />
          <PlaceOrder />
        </div>
        <div className="grid grid-cols-2 gap-x-24">
          <div className="flex flex-col gap-3 px-2">
            <p className="text-sm font-semibold text-stone-400">
              Working hours:
            </p>
            <p className="mb-10 font-semibold text-stone-800 max-lg:text-sm md:px-1">
              from 11:00 to 22:30
            </p>
          </div>
          <div className="flex flex-col gap-3 px-2">
            <p className="text-sm font-semibold text-stone-400">
              Find us on social media:
            </p>

            <SocialMediaBlock />
          </div>
        </div>

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
    </>
  )
}

export default AppFooter

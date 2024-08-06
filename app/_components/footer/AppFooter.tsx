import Link from "next/link"

import WorkingHours from "./WorkingHours"
import PlaceOrder from "./PlaceOrder"
import WebsiteMap from "./WebsiteMap"
import FooterAbout from "./About"

function AppFooter() {
  return (
    <div className="flex max-w-[1304px] flex-col items-center bg-white px-3 py-12">
      <div className="grid w-full grid-cols-[6fr_2fr_3fr_2.5fr] gap-24 pb-12">
        <FooterAbout />
        <WebsiteMap />
        <PlaceOrder />
        <WorkingHours />
      </div>

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

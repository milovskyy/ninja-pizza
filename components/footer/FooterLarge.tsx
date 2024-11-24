import { Link } from "lucide-react"
import FooterAbout from "./About"
import PlaceOrder from "./PlaceOrder"
import WebsiteMap from "./WebsiteMap"
import WorkingHours from "./WorkingHours"

export const FooterLarge = () => {
  return (
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
  )
}

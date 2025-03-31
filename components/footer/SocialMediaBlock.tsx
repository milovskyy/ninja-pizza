import Link from "next/link"
import { SiFacebook, SiInstagram, SiTelegram } from "react-icons/si"

function SocialMediaBlock() {
  return (
    <div className="flex md:gap-2">
      <Link
        title="Telegram"
        href="/"
        className="px-2 font-semibold text-stone-500 hover:text-stone-900"
      >
        <SiTelegram size="24px" />
      </Link>
      <Link
        title="Facebook"
        href="/"
        className="px-2 font-semibold text-stone-500 hover:text-stone-900"
      >
        <SiFacebook size="24px" />
      </Link>
      <Link
        title="Instagram"
        href="/"
        className="px-2 font-semibold text-stone-500 hover:text-stone-900"
      >
        <SiInstagram size="24px" />
      </Link>
    </div>
  )
}

export default SocialMediaBlock

import Link from "next/link"
import { LiaClipboardListSolid } from "react-icons/lia"

function InfoHeaderOrders() {
  return (
    <div className="h-10 w-10 items-center justify-center sm:flex xl:h-14 xl:w-14">
      <Link
        href="/orders"
        className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-100 pb-[2px] text-stone-500 hover:bg-stone-950 hover:text-white"
      >
        <LiaClipboardListSolid size="27px" />
      </Link>
    </div>
  )
}

export default InfoHeaderOrders

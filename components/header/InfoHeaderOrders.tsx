import Link from "next/link"
import { LiaClipboardListSolid } from "react-icons/lia"

function InfoHeaderOrders() {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center">
      <Link
        href="/orders"
        className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-100 pb-[2px] text-stone-500 hover:bg-stone-950 hover:text-white"
      >
        <LiaClipboardListSolid size="30px" />
      </Link>
    </div>
  )
}

export default InfoHeaderOrders

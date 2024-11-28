import Link from "next/link"

function WebsiteMap() {
  return (
    <div className="w- flex w-[110px] flex-col gap-4">
      <p className="px-1 text-sm font-semibold text-stone-400">Website map:</p>
      <div className="inline-flex">
        <Link
          href="/"
          className="inline-flex px-1 font-semibold text-stone-800 hover:text-primary"
          prefetch={true}
        >
          Home
        </Link>
      </div>
      <div className="inline-flex">
        <Link
          href="/about"
          className="inline-flex px-1 font-semibold text-stone-800 hover:text-primary"
          prefetch={true}
        >
          About
        </Link>
      </div>
      <div className="inline-flex">
        <Link
          href="/news"
          className="inline-flex px-1 font-semibold text-stone-800 hover:text-primary"
          prefetch={true}
        >
          News
        </Link>
      </div>
    </div>
  )
}

export default WebsiteMap

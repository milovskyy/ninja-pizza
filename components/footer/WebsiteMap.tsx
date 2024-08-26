import Link from "next/link"

function WebsiteMap() {
  return (
    <div className="flex flex-col gap-4">
      <p className="px-2 text-sm text-stone-400">Website map:</p>
      <div className="inline-flex">
        <Link
          href="/"
          className="inline-flex px-2 font-semibold text-stone-800 hover:text-primary"
        >
          Home
        </Link>
      </div>
      <div className="inline-flex">
        <Link
          href="/about"
          className="inline-flex px-2 font-semibold text-stone-800 hover:text-primary"
        >
          About
        </Link>
      </div>
      <div className="inline-flex">
        <Link
          href="/news"
          className="inline-flex px-2 font-semibold text-stone-800 hover:text-primary"
        >
          News
        </Link>
      </div>
    </div>
  )
}

export default WebsiteMap

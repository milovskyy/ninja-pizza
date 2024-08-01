import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import NavigationMenu from "./NavigationMenu"

function NavigationHeader() {
  return (
    <nav className="ml-12 flex items-center justify-center">
      <ol className="flex items-center justify-center gap-2">
        <li>
          <Link
            className="flex h-[56px] items-center justify-center rounded-full px-5 font-bold text-stone-800 hover:bg-stone-200"
            href="/"
          >
            <p>Home</p>
          </Link>
        </li>
        <li className="justify-cente group flex h-full flex-col items-center font-bold text-stone-800">
          <div className="flex h-[56px] items-center justify-center gap-1 rounded-full px-5 hover:bg-stone-200">
            <p>Menu</p>
            <IoIosArrowDown
              size="14px"
              className="relative top-[1px] transition duration-300 group-hover:rotate-180"
            />
          </div>
          <NavigationMenu />
        </li>
        <li>
          <Link
            className="flex h-[56px] items-center justify-center rounded-full px-5 font-bold text-stone-800 hover:bg-stone-200"
            href="/about"
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex h-[56px] items-center justify-center rounded-full px-5 font-bold text-stone-800 hover:bg-stone-200"
            href="/news"
          >
            <p>News</p>
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default NavigationHeader

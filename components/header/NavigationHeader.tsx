import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import NavigationMenu from "./NavigationMenu"
import MenuCategories from "../MenuCategories"

function NavigationHeader() {
  return (
    <nav className="ml-3 hidden items-center justify-center lg:flex xl:ml-12">
      <ol className="flex items-center justify-center gap-2 text-sm xl:text-base">
        <li>
          <Link
            className="flex h-12 items-center justify-center rounded-full px-2 font-bold text-stone-800 hover:bg-stone-200 xl:h-14 xl:px-3 2xl:px-5"
            href="/"
            prefetch={true}
          >
            <p>Home</p>
          </Link>
        </li>
        <li className="group flex h-full flex-col items-center justify-center font-bold text-stone-800">
          <div className="flex h-12 items-center justify-center gap-1 rounded-full px-2 hover:bg-stone-200 xl:h-14 xl:px-3 2xl:px-5">
            <p>Menu</p>
            <IoIosArrowDown
              size="14px"
              className="relative top-[1px] transition duration-300 group-hover:rotate-180"
            />
          </div>
          <NavigationMenu>
            <MenuCategories />
          </NavigationMenu>
        </li>
        <li>
          <Link
            className="flex h-12 items-center justify-center rounded-full px-2 font-bold text-stone-800 hover:bg-stone-200 xl:h-14 xl:px-3 2xl:px-5"
            href="/about"
            prefetch={true}
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex h-12 items-center justify-center rounded-full px-2 font-bold text-stone-800 hover:bg-stone-200 xl:h-14 xl:px-3 2xl:px-5"
            href="/news"
            prefetch={true}
          >
            <p>News</p>
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default NavigationHeader

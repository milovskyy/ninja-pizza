import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { GoHeart } from "react-icons/go"
import Button from "./ui/Button"
import Link from "next/link"

function MenuCard() {
  return (
    <div className="w-full rounded-2xl bg-white p-6">
      <div className="relative flex w-full flex-col">
        <Link
          href="/about"
          className="relative aspect-square w-[75%] self-center rounded-2xl bg-white"
        >
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/pizza/1.webp"
            alt="img"
            fill
            className="object-cover"
          />
        </Link>
        <Link className="mt-6" href="/about">
          <h1 className="text-xl font-bold">Pizza with pear and gorgonzola</h1>
        </Link>

        <h3 className="mt-3 text-[14px] font-semibold text-stone-400">
          <span className="font-semibold text-[#ffc700]">30 cm / 550 g</span> -
          Dough made of four types of flour, Mozzarella, Parmesan, Gorgonzola
        </h3>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="text-xl font-bold">350</div>
            <div className="text-sm font-semibold text-stone-400">UAH</div>
          </div>
          {/* <div className="flex items-center justify-center gap-3">
            <div className="cursor-pointer rounded-full bg-stone-100 p-[18px] hover:bg-[#ffc700]">
              <AiOutlineMinus />
            </div>
            <div className="font-bold">1</div>
            <div className="cursor-pointer rounded-full bg-stone-100 p-[18px] hover:bg-[#ffc700]">
              <AiOutlinePlus />
            </div>
          </div> */}
          <Button
            color="bg-stone-100"
            className="bg-stone-100 py-3 text-[16px] font-bold hover:bg-[#ffc700]"
          >
            Order
          </Button>
        </div>

        <div className="absolute left-0 top-0 rounded-lg bg-[#ddf0ce] px-2 py-[3px] text-sm font-bold text-[#55b30b]">
          NEW
        </div>
        {/* <div className="absolute left-0 top-0 rounded-lg bg-[#fad5d5] px-2 py-[3px] text-sm font-bold text-[#e72e2e]">
          HIT
        </div> */}

        <div className="absolute right-0 top-0 cursor-pointer rounded-full bg-stone-100 p-3 text-stone-500 hover:text-red-600">
          <GoHeart size="24px" className="relative top-[2px]" />
        </div>

        <div className="absolute left-0 top-[150px] aspect-square h-10 w-10 rounded-lg bg-[#ddf0ce] p-[7px]">
          <div className="relative aspect-square">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/VeganFilter.png"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute right-0 top-[150px] aspect-square h-10 w-10 rounded-lg bg-[#fad5d5] p-[7px]">
          <div className="relative aspect-square">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/spicyFilter.png"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuCard

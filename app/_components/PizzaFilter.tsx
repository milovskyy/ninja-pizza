"use client"

import Image from "next/image"

function PizzaFilter() {
  return (
    <div className="mb-3 mt-5 flex w-full gap-9 self-start rounded-2xl bg-white p-5">
      <div className="flex gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-main">
          <div className="h-[14px] w-[14px] rounded-full bg-main" />
        </div>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/spicyFilter.png"
          alt=""
          width={24}
          height={24}
          className=""
        />
        <p className="font-semibold">Spicy</p>
      </div>
      <div className="flex gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-main">
          <div className="h-[14px] w-[14px] rounded-full bg-main" />
        </div>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/meatFilter.png"
          alt=""
          width={24}
          height={24}
          className=""
        />
        <p className="font-semibold">Meat</p>
      </div>
      <div className="flex gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-main">
          <div className="h-[14px] w-[14px] rounded-full bg-main" />
        </div>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/veganFilter.png"
          alt=""
          width={24}
          height={24}
          className=""
        />
        <p className="font-semibold">Vegetarian</p>
      </div>
      <div className="flex gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-main">
          <div className="h-[14px] w-[14px] rounded-full bg-main" />
        </div>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/fishFilter.png"
          alt=""
          width={24}
          height={24}
          className=""
        />
        <p className="font-semibold">Seafood</p>
      </div>
    </div>
  )
}

export default PizzaFilter

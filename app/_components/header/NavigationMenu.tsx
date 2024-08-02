"use client"

import { useState } from "react"
import NavigationMenuElement from "./NavigationMenuElement"

const menuCategories = [
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/pizza2x.webp",
    label: "Pizza",
    link: "pizza",
    color: "bg-[#fff3dd]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/snacks2x.webp",
    label: "Snacks",
    link: "snacks",
    color: "bg-[#f0efff]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/drinks2x.webp",
    label: "Drinks",
    link: "drinks",
    color: "bg-[#e3f3ff]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/sauces2x.webp",
    label: "Extras",
    link: "extras",
    color: "bg-[#e4f1c6]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/desert3x.webp",
    label: "Desserts",
    link: "desserts",
    color: "bg-[#ffe1e1]",
  },
]

function NavigationMenu() {
  const [vis, setVis] = useState(true)

  const closeMenu = () => {
    setVis(false)
    setTimeout(() => setVis(true), 50)
  }

  if (!vis) return

  return (
    <div className="absolute top-[68px] hidden overflow-hidden rounded-b-3xl pt-[12px] text-[16px] group-hover:flex">
      <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 hover:hidden" />
      <div className="flex">
        {menuCategories.map((category) => {
          return (
            <NavigationMenuElement
              key={category.link}
              category={category}
              closeMenu={closeMenu}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NavigationMenu

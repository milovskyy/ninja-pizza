"use client"

import { useState } from "react"
import MenuCategories from "../MenuCategories"

function NavigationMenu() {
  const [vis, setVis] = useState(true)

  const closeMenu = () => {
    setVis(false)
    setTimeout(() => setVis(true), 50)
  }

  if (!vis) return

  return (
    <div
      className="absolute top-[68px] hidden overflow-hidden rounded-b-3xl pt-[12px] text-[16px] group-hover:flex"
      onClick={closeMenu}
    >
      <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
      <MenuCategories />
    </div>
  )
}

export default NavigationMenu

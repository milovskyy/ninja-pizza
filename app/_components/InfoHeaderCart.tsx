import { LiaShoppingBagSolid } from "react-icons/lia"

function InfoHeaderCart() {
  return (
    <div className="bgmain relative flex h-full w-full cursor-pointer items-center justify-center rounded-full pb-[2px]">
      <LiaShoppingBagSolid size="28px" />
      <div className="absolute right-[5px] top-[5px] flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-red-50">
        3
      </div>
    </div>
  )
}

export default InfoHeaderCart

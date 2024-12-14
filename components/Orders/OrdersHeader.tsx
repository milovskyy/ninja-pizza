export const OrdersHeader = () => {
  return (
    <div className="flex flex-1 items-center justify-center gap-2 bg-orange-100 px-2 text-center text-sm font-black max-sm:justify-between xs:text-base md:px-3 md:text-[18px] lg:gap-4 lg:px-5">
      <div className="flex h-14 w-[65px] items-center justify-center rounded-xl py-1 xs:w-[85px] md:w-[105px] lg:px-4">
        Date
      </div>
      <div className="flex h-14 w-[65px] items-center justify-center rounded-xl p-3 md:w-[88px]">
        Method
      </div>
      <div className="hidden flex-1 items-center justify-center px-2 sm:flex">
        Products
      </div>
      <div className="flex w-5 items-center justify-center p-2 sm:w-[25px] md:w-[48px]">
        Qty
      </div>
      <div className="flex w-[60px] items-center justify-center whitespace-nowrap p-2 sm:w-[65px] md:w-[94px]">
        Total
      </div>
      <div className="flex w-[84px] items-center justify-center p-2 sm:w-24 md:w-[120px]">
        Status
      </div>
    </div>
  )
}

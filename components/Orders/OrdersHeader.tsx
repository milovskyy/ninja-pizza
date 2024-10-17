import { cn } from "@/utils/utils"

type Props = {}

export const OrdersHeader = ({}: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center gap-4 bg-orange-100 px-5 text-center text-[18px] font-black">
      <div className="flex h-14 w-[105px] items-center justify-center rounded-xl px-4 py-1">
        Date
      </div>
      <div className="flex h-14 w-[88px] items-center justify-center rounded-xl p-3">
        Method
      </div>
      <div className="flex flex-1 items-center justify-center px-2">
        Products
      </div>
      <div className="flex w-[48px] items-center justify-center p-2">Qty</div>
      <div className="flex w-[94px] items-center justify-center whitespace-nowrap p-2">
        Total
      </div>
      <div className="flex w-[120px] items-center justify-center p-2">
        Status
      </div>
    </div>
  )
}

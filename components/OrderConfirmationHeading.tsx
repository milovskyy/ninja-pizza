import { cn } from "@/utils/utils"
import { FiPhoneCall } from "react-icons/fi"

type Props = {
  id: string
}

export const OrderConfirmationHeading = ({ id }: Props) => {
  return (
    <div className="mb-1 flex flex-col items-center gap-3 rounded-2xl bg-white p-4 xs:gap-5 xs:p-6 sm:p-10 md:gap-7">
      <p className="text-center text-base font-bold xs:text-lg sm:text-xl md:text-2xl">
        Thank you for your order{" "}
        <span className="rounded-full bg-primary px-3 py-1">#{id}</span>. Your
        order has been successfully placed
      </p>
      <div className="flex items-center gap-3 rounded-lg border border-main bg-main/10 p-1 px-3 text-center sm:p-3 sm:px-5">
        <div className="miw-w-[30px]">
          <FiPhoneCall size={26} />
        </div>
        <p className="text-base font-bold sm:text-xl">
          We will contact you shortly to confirm your order
        </p>
      </div>
    </div>
  )
}

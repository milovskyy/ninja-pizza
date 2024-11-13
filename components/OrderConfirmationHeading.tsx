import { cn } from "@/utils/utils"
import { FiPhoneCall } from "react-icons/fi"

type Props = {
  id: string
}

export const OrderConfirmationHeading = ({ id }: Props) => {
  return (
    <div className="mb-1 flex flex-col items-center gap-7 rounded-2xl bg-white p-10">
      <p className="text-center text-2xl font-bold">
        Thank you for your order{" "}
        <span className="rounded-full bg-primary px-3 py-1">#{id}</span>. Your
        order has been successfully placed
      </p>
      <div className="flex gap-3 rounded-lg border border-main bg-main/10 p-3 px-5 text-center">
        <FiPhoneCall size={26} />
        <p className="text-xl font-bold">
          We will contact you shortly to confirm your order
        </p>
      </div>
    </div>
  )
}

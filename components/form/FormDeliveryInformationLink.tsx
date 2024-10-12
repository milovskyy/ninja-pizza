import { Info } from "lucide-react"
import Link from "next/link"

type Props = {}

export const FormDeliveryInformationLink = ({}: Props) => {
  return (
    <Link className="" href="/about">
      <div className="flex gap-1 p-1 pr-3">
        <div className="text-sm font-semibold text-primary">About delivery</div>
        <Info className="text-primary" size={20} />
      </div>
    </Link>
  )
}

import { cn } from "@/utils/utils"
import { FormDeliveryInformationLink } from "./FormDeliveryInformationLink"

type Props = {
  children: React.ReactNode
  title: string
  subtitle?: string
  className?: string
  delivery?: boolean
}

export const FormBlock = ({
  children,
  title,
  subtitle,
  className,
  delivery,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between gap-3">
        <h2 className="text-xl font-bold">{title}</h2>
        {delivery && <FormDeliveryInformationLink />}
      </div>
      {subtitle && <p className="text-sm text-stone-400">{subtitle}</p>}

      <div className={cn("border border-stone-200 px-5 py-5", className)}>
        {children}
      </div>
    </div>
  )
}

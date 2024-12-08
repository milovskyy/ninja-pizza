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
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
        {delivery && <FormDeliveryInformationLink />}
      </div>
      {subtitle && (
        <p className="text-xs text-stone-400 sm:text-sm">{subtitle}</p>
      )}

      <div className={cn("border border-stone-200 p-3 sm:p-5", className)}>
        {children}
      </div>
    </div>
  )
}

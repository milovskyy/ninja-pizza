import { cn } from "@/utils/utils"

type Props = {
  children: React.ReactNode
  title: string
  subtitle?: string
  className?: string
}

export const FormBlock = ({ children, title, subtitle, className }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm text-stone-400">{subtitle}</p>}

      <div className={cn("border border-stone-200 px-5 py-5", className)}>
        {children}
      </div>
    </div>
  )
}

import { cn } from "@/utils/utils"
import { PropsWithChildren } from "react"

type Props = {
  className?: string
}

export const Container = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1304px] px-3", className)}>
      {children}
    </div>
  )
}

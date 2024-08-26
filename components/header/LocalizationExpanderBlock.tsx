import { PropsWithChildren } from "react"

type PropsType = {
  text: string
}

function LocalizationExpanderBlock({
  text,
  children,
}: PropsWithChildren<PropsType>) {
  return (
    <div className="flex flex-col gap-3">
      <div>{text}</div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  )
}

export default LocalizationExpanderBlock

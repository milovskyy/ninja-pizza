import { cn } from "@/lib/utils"
import { ProductBlock } from "../../../components/ProductBlock"

type PropsType = {
  params: { prod: string }
}

export const revalidate = 0

export default function Page({ params }: PropsType) {
  const { prod: productName } = params
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative">
        <ProductBlock productName={productName} />
      </div>
    </div>
  )
}

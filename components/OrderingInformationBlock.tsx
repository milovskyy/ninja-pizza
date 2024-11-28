import Image from "next/image"

type Props = {
  image: string
  title: string
  text: string
}

export const OrderingInformationBlock = ({ image, title, text }: Props) => {
  return (
    <div className="flex items-center justify-center gap-5 rounded-3xl bg-white p-2 sm:p-4 lg:p-5">
      <div className="relative flex aspect-square h-12 items-center justify-center max-sm:h-9">
        <Image src={image} alt="img" fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold max-md:text-lg">{title}</div>
        <div className="text-sm font-medium text-stone-400">{text}</div>
      </div>
    </div>
  )
}

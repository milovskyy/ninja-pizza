import { Button } from "../ui/button"
import Image from "next/image"

type Props = {}

export const ContactsHover = ({}: Props) => {
  return (
    <div className="absolute right-2 top-10 hidden w-[250px] overflow-hidden pt-5 text-center group-hover:flex md:top-12 xl:-right-2 xl:top-14">
      <div className="flex w-full flex-col gap-1 rounded-3xl bg-white px-5 pb-5 pt-7">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobile/vodafone.svg"
              alt="vodagone"
              width={22}
              height={22}
              quality={60}
            />
            <Button variant={"phone"} size={"phone"}>
              {"+38 (095) 344 22 44"}
            </Button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobile/Kyivstar.png"
              alt="kievstar"
              width={26}
              height={26}
            />
            <Button variant={"phone"} size={"phone"}>
              {"+38 (067) 344 22 44"}
            </Button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobile/Lifecell.png"
              alt="lifecell"
              width={22}
              height={22}
            />
            <Button variant={"phone"} size={"phone"}>
              {" +38 (063) 344 22 44"}
            </Button>
          </div>
          <h3 className="text-sm text-stone-500">
            Call us from 11 AM to 10 PM, seven days a week.
          </h3>
        </div>
      </div>
    </div>
  )
}

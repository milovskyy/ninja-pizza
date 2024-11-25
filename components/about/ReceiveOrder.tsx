import Image from "next/image"
import Link from "next/link"

function ReceiveOrder() {
  return (
    <div className="mb-2 py-3 md:mb-5 md:py-4 xl:mb-10">
      <h1 className="mb-5 px-3 text-2xl font-bold max-lg:text-center sm:text-3xl md:text-4xl lg:text-5xl">
        How to get my order?
      </h1>
      <p className="mb-5 px-3 font-semibold text-stone-700 max-lg:text-center">
        Orders are delivered within 90 minutes
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-courier.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-center font-bold md:text-xl">
            Courier delivery
          </div>
          <div className="py-2 text-center font-semibold max-md:text-sm">
            Our courier will be just on time
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-time.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-center font-bold md:text-xl">
            Pre-order
          </div>
          <div className="py-2 text-center font-semibold max-md:text-sm">
            Order in advance, pick up on selected time
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl"></div>
      </div>
    </div>
  )
}

export default ReceiveOrder

import Image from "next/image"
import Link from "next/link"

function ReceiveOrder() {
  return (
    <div className="mb-10 py-4">
      <h1 className="mb-5 text-5xl font-bold">How to get my order?</h1>
      <p className="mb-5 font-semibold text-stone-700">
        Orders are delivered within 90 minutes
      </p>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-5">
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-8">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-courier.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            Courier delivery
          </div>
          <div className="py-2 font-semibold">
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
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            Pre-order
          </div>
          <div className="py-2 font-semibold">
            Order in advance, pick up on selected time
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl"></div>
      </div>
    </div>
  )
}

export default ReceiveOrder

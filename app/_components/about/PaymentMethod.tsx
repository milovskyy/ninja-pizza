import Image from "next/image"
import Link from "next/link"

function PaymentMethod() {
  return (
    <div className="mb-10 py-4">
      <h1 className="mb-5 text-5xl font-bold">Payment</h1>
      <p className="mb-5 font-semibold text-stone-700">
        Free delivery from 500 UAH
      </p>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-5">
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-8">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-cash.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            Cash on delivery
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-card.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <Link
            href="/about"
            className="flex flex-1 items-center justify-center self-center text-xl font-bold"
          >
            Online with a debit or credit card
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6">
          <div className="relative flex h-[64px] w-[93px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-applePay.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-xl font-bold">
            Apple Pay on delivery
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod

import Image from "next/image"
import Link from "next/link"

function PaymentMethod() {
  return (
    <div className="mb-6 py-4 xl:mb-10">
      <h1 className="mb-5 px-3 text-2xl font-bold max-lg:text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Payment
      </h1>
      <p className="mb-5 px-3 font-semibold text-stone-700 max-lg:text-center">
        Free delivery from 500 UAH
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6 md:gap-5">
          <div className="relative flex aspect-square h-[64px] items-center justify-center">
            <Image
              src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-cash.svg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-center self-center text-center font-bold md:text-xl">
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
            className="flex flex-1 items-center justify-center self-center text-center font-bold md:text-xl"
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
          <div className="flex flex-1 items-center justify-center self-center text-center font-bold md:text-xl">
            Apple Pay on delivery
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod

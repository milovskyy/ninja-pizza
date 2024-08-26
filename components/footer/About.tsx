import Image from "next/image"

function FooterAbout() {
  return (
    <div className="flex flex-col px-3">
      <Image
        src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
        quality={100}
        width={156}
        height={40}
        className="mb-4"
        alt="The Ninja Pizza logo"
      />

      <div className="mb-6 font-semibold text-stone-400">
        Cheese, meat, vegetarian, shrimp and salmon pizza. Ninja Pizza has
        everything you need!
      </div>
      <Image
        src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/payments.png"
        quality={100}
        width={162}
        height={31}
        alt="The Ninja Pizza logo"
      />
    </div>
  )
}

export default FooterAbout

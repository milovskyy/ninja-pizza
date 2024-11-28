import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <>
      <Link
        href="/"
        className="hidden min-w-[156px] items-center justify-center md:flex"
      >
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
          quality={100}
          width={156}
          height={40}
          alt="The Ninja Pizza logo"
        />
      </Link>
      <Link
        href="/"
        className="flex min-w-[68px] items-center justify-center px-1 md:hidden"
      >
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo-mobile.svg"
          quality={100}
          width={73}
          height={32}
          alt="The Ninja Pizza logo"
        />
      </Link>
    </>
  )
}

export default Logo

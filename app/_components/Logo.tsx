import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/logo.svg"
        quality={100}
        width={156}
        height={40}
        alt="The Ninja Pizza logo"
      />
    </Link>
  )
}

export default Logo

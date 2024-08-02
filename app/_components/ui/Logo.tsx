import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"

function Logo() {
  return (
    <Link href="/" className="justify-cente flex items-center">
      <Image src={logo} quality={100} width="158" alt="The Ninja Pizza logo" />
    </Link>
  )
}

export default Logo

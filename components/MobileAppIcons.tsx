import Image from "next/image"
import Link from "next/link"

type PropsType = {
  className: string
}

function MobileAppIcons({ className }: PropsType) {
  return (
    <div className="flex gap-4">
      <Link href="/about" className={`relative ${className}`}>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/apple.svg"
          alt="img"
          fill
          className="rounded-lg object-cover"
        />
      </Link>
      <Link href="/about" className={`relative ${className} `}>
        <Image
          src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/google.svg"
          alt="img"
          fill
          className="rounded-lg object-cover"
        />
      </Link>
    </div>
  )
}

export default MobileAppIcons

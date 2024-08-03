import Image from "next/image"
import Link from "next/link"

function MobileAppBanner() {
  return (
    <div className="flex h-[420px] max-w-[1304px] items-center justify-center px-3">
      <div className="bgmain absolute flex h-[420px] w-[1432px] items-center justify-between rounded-[32px] px-[88px]">
        <div className="flex max-w-[500px] flex-col gap-10">
          <div className="text text-[48px] font-[800] leading-[60px]">
            Download the mobile app and save time ordering
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="relative h-[46px] w-[136px]">
              <Image
                src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/ios.svg"
                alt="img"
                fill
                className="object-cover"
              />
            </Link>
            <Link href="/about" className="relative h-[46px] w-[152px]">
              <Image
                src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/android.svg"
                alt="img"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="relative h-[336px] w-[688px] self-end">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/mobile-app-image_en.png"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default MobileAppBanner

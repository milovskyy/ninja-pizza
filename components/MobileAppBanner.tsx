import Image from "next/image"
import MobileAppIcons from "./MobileAppIcons"

function MobileAppBanner() {
  return (
    <div className="flex h-[420px] items-center justify-center px-3">
      <div className="absolute flex h-[420px] w-[1432px] items-center justify-between rounded-[32px] bg-primary px-[88px]">
        <div className="flex max-w-[500px] flex-col gap-10">
          <div className="text text-[48px] font-[800] leading-[60px]">
            Download the mobile app and save time ordering
          </div>
          <MobileAppIcons className="h-[40px] w-[145px]" />
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

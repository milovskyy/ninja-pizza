import Image from "next/image"
import MobileAppIcons from "./MobileAppIcons"

function MobileAppBanner() {
  return (
    // <div className="flex h-[420px] flex-col items-center justify-center px-3">
    <div className="flex w-full flex-col items-center justify-center gap-1 rounded-[32px] bg-primary px-8 md:px-20 lg:grid lg:h-[340px] lg:min-h-[340px] lg:grid-cols-[3fr_4fr] lg:gap-10 xl:h-[420px] xl:min-h-[420px]">
      <div className="flex flex-col items-center justify-center gap-4 max-lg:pt-6 sm:gap-6 lg:items-start lg:gap-10 xl:py-16">
        <p className="text-center text-3xl font-black md:text-4xl md:leading-[50px] lg:text-start xl:text-5xl xl:leading-[60px]">
          Download the mobile app and save time ordering
        </p>
        <MobileAppIcons className="h-[40px] w-[145px]" />
      </div>
      {/*  */}
      <div className="self-center max-lg:h-full max-lg:w-full lg:self-end lg:px-2">
        <div className="relative aspect-video self-end">
          <Image
            src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/mobileApp/mobile-app-image_en.png"
            alt="mobile app"
            fill
            className="object-cover pt-5 sm:pt-8 md:pt-10 lg:pt-6 xl:pt-8"
          />
        </div>
      </div>
    </div>
    //  </div>
  )
}

export default MobileAppBanner

import Image from "next/image"
import MainSwiper from "./_components/MainSwiper"
import MainAbout from "./_components/MainAbout"
import MainMenuCategory from "./_components/MainMenuCategory"
import MobileAppBanner from "./_components/MobileAppBanner"
import AppFooter from "./_components/footer/AppFooter"
import MapComponent from "./_components/MapComponent"

export default function Home() {
  return (
    <div className="flex max-w-[1304px] flex-1 flex-col bg-red-100">
      <MainSwiper />
      <MainAbout />
      <div className="mb-16 flex flex-col">
        <MainMenuCategory />
        <MainMenuCategory />
        <MainMenuCategory />
      </div>
      <MapComponent />
      <div className="mt-[-100px]">
        <MobileAppBanner />
      </div>
      <div className="py-20 text-center">Best Pizza Ever!</div>
    </div>
  )
}

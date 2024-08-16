import MainSwiper from "./_components/MainSwiper"
import MainAbout from "./_components/MainAbout"
import MobileAppBanner from "./_components/MobileAppBanner"
import MapComponent from "./_components/MapComponent"
import MainFullMenu from "./_components/MainFullMenu"
import AppFooter from "./_components/footer/AppFooter"

export const revalidate = 0

export default async function Home() {
  return (
    <div className="flex max-w-[1304px] flex-1 flex-col">
      <MainSwiper />
      <MainAbout />

      <MainFullMenu />

      <MapComponent />
      <div className="mt-[-100px]">
        <MobileAppBanner />
      </div>
      <div className="py-20 text-center">Best Pizza Ever!</div>
      <AppFooter />
    </div>
  )
}

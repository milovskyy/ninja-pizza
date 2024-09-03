import MainSwiper from "../components/MainSwiper"
import MainAbout from "../components/MainAbout"
import MobileAppBanner from "../components/MobileAppBanner"
import MapComponent from "../components/MapComponent"
import FullMenu from "../components/FullMenu"
import AppFooter from "../components/footer/AppFooter"
import { Container } from "@/components/Container"

export const revalidate = 0

export default async function Home() {
  return (
    <Container className="flex flex-1 flex-col">
      <MainSwiper />
      <MainAbout />
      <FullMenu />

      <MapComponent />
      <div className="mt-[-100px]">
        <MobileAppBanner />
      </div>
      <div className="py-20 text-center">Best Pizza Ever!</div>
      <AppFooter />
    </Container>
  )
}

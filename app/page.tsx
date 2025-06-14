import MainAbout from "../components/MainAbout"
import MobileAppBanner from "../components/MobileAppBanner"
import MapComponent from "../components/MapComponent"
import FullMenu from "../components/FullMenu"
import AppFooter from "../components/footer/AppFooter"
import { Container } from "@/components/Container"
import MainSwiper from "@/components/MainSwiper"

export default function Home() {
  return (
    <Container className="flex flex-1 flex-col">
      <MainSwiper />
      <MainAbout />
      <FullMenu />
      {/* <MapComponent /> */}
      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

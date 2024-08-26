import { Container } from "@/components/Container"
import AboutUs from "../../components/about/AboutUs"
import DeliveryDetails from "../../components/about/DeliveryDetails"
import MakeOrder from "../../components/about/MakeOrder"
import MenuSelect from "../../components/about/MenuSelect"
import PaymentMethod from "../../components/about/PaymentMethod"
import ReceiveOrder from "../../components/about/ReceiveOrder"
import AppFooter from "../../components/footer/AppFooter"
import MapComponent from "../../components/MapComponent"
import MobileAppBanner from "../../components/MobileAppBanner"

export const revalidate = 0

function About() {
  return (
    <Container>
      <MapComponent />
      <DeliveryDetails />
      <MakeOrder />
      <PaymentMethod />
      <ReceiveOrder />
      <MenuSelect />
      <AboutUs />
      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

export default About

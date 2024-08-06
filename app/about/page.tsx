import AboutUs from "../_components/about/AboutUs"
import DeliveryDetails from "../_components/about/DeliveryDetails"
import MakeOrder from "../_components/about/MakeOrder"
import MenuSelect from "../_components/about/MenuSelect"
import PaymentMethod from "../_components/about/PaymentMethod"
import ReceiveOrder from "../_components/about/ReceiveOrder"
import MapComponent from "../_components/MapComponent"
import MobileAppBanner from "../_components/MobileAppBanner"

function About() {
  return (
    <div className="w-full max-w-[1304px]">
      <MapComponent />
      <DeliveryDetails />
      <MakeOrder />
      <PaymentMethod />
      <ReceiveOrder />
      <MenuSelect />
      <AboutUs />
      <MobileAppBanner />
    </div>
  )
}

export default About

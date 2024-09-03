import MainSwiper from "../components/MainSwiper"
import MainAbout from "../components/MainAbout"
import MobileAppBanner from "../components/MobileAppBanner"
import MapComponent from "../components/MapComponent"
import FullMenu from "../components/FullMenu"
import AppFooter from "../components/footer/AppFooter"
import { Container } from "@/components/Container"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import { getProducts } from "@/lib/actions"

export const revalidate = 0

export default async function Home() {
  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // })

  return (
    <Container className="flex flex-1 flex-col">
      <MainSwiper />
      <MainAbout />

      {/* <HydrationBoundary state={dehydrate(queryClient)}>
      </HydrationBoundary> */}
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

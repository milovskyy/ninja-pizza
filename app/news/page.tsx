import { cn } from "@/utils/utils"

import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

export default function News() {
  return (
    <Container>
      <Navigation categoryName="About" />
      <div
        className={cn(
          "text-bold flex h-[300px] w-full items-center justify-center text-2xl",
        )}
      >
        <p>No News Yet</p>
      </div>

      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

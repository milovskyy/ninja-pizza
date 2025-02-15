import { cn } from "@/utils/utils"

import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

export default function News() {
  return (
    <Container>
      <Navigation categoryName="News" />
      <div
        className={cn(
          "text-bold flex h-[300px] w-full items-center justify-center text-2xl",
        )}
      >
        <p>No News Yet</p>
      </div>
      <div>
        <a
          title=""
          target="_blank"
          href="https://drive.google.com/file/d/1Ae7fKRchCbGMf3Io-3h3aMl14MU0LKqZ/view?usp=share_link"
        >
          Я приймаю правила та умови студії. Ознайомитись з правилами можна за
          посиланням натиснувши на це повідомленння
        </a>
        <div className="my-10">
          Я приймаю{" "}
          <a
            title=""
            target="_blank"
            href="https://drive.google.com/file/d/1Ae7fKRchCbGMf3Io-3h3aMl14MU0LKqZ/view?usp=share_link"
          >
            <span className="my-10 underline">правила та умови</span>
          </a>{" "}
          студії
        </div>
      </div>

      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

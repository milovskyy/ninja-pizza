import { AccountNav } from "@/components/account/AccountNav"
import { UpdateInfo } from "@/components/account/UpdateInfoBlock"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MenuCategories from "@/components/MenuCategories"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Account",
  description: "",
}

type LayoutProps = {
  children: ReactNode
}

export default async function AccountLayout({ children }: LayoutProps) {
  return (
    <Container className="">
      <Navigation categoryName="My account" />
      <div className="mb-24 flex w-full gap-10">
        <div>
          <div className="flex w-[210px] flex-col gap-3 rounded-3xl bg-white p-5">
            <AccountNav />
            <UpdateInfo />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-7">
          <div className="">{children}</div>
          <MenuCategories separate={true} />
        </div>
      </div>

      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

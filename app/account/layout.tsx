import { ReactNode } from "react"
import type { Metadata } from "next"

import { AccountLogOut } from "@/components/account/AccountLogOut"
import { AccountNav } from "@/components/account/AccountNav"
import { UpdateInfo } from "@/components/account/UpdateInfoBlock"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MenuCategories from "@/components/MenuCategories"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

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
      <div className="mb-12 flex w-full max-md:flex-col sm:gap-3 md:gap-5 xl:gap-10">
        <div>
          <div className="grid w-full grid-cols-[1fr_1fr] gap-3 rounded-3xl bg-white p-3 xs:max-md:gap-9 xs:max-md:p-5 xs:max-md:px-8 md:flex md:w-[190px] md:flex-col md:gap-3 lg:w-[210px] lg:p-5">
            <AccountNav />
            <div className="flex flex-col gap-3 max-md:py-1">
              <UpdateInfo />
              <AccountLogOut />
            </div>
          </div>
        </div>

        <div className="flex min-h-full w-full flex-col">{children}</div>
      </div>
      <div className="mb-10">
        <MenuCategories separate={true} />
      </div>

      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}

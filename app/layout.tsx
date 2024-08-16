import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import AppHeader from "./_components/header/AppHeader"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ninja Pizza Tech",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} mx-auto flex flex-col items-center justify-center bg-stone-100`}
      >
        <AppHeader />
        <main className="mt-[84px] flex-1">{children}</main>
      </body>
    </html>
  )
}

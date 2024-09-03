import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import AppHeader from "@/components/header/AppHeader"
// import Provider from "@/lib/Providers"

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
        className={`${manrope.className} mx-auto flex min-h-screen flex-col items-center bg-stone-100`}
      >
        <AppHeader />
        <main className="mt-[84px] flex w-full flex-1 justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}

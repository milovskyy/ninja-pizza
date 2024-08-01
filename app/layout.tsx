import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import AppHeader from "./_components/AppHeader"

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
        className={`${manrope.className} mx-auto flex flex-col items-center justify-center bg-stone-200`}
      >
        <AppHeader />
        {/* <div className="fixed top-2 flex h-[80px] w-full max-w-[1920px] flex-1 rounded-full bg-white">
          3
        </div> */}
        <main className="w-full max-w-[1304px] flex-1 px-3">{children}</main>
      </body>
    </html>
  )
}

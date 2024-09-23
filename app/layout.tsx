import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import AppHeader from "@/components/header/AppHeader"
import { getCategories, getIngredients, getProducts } from "@/lib/data-service"
import { AppInitializer } from "@/components/AppInitializer"
import { Toaster } from "react-hot-toast"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ninja Pizza Tech",
  description: "",
}

export const revalidate = 100000

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const products = await getProducts()
  const categories = await getCategories()
  const ingredients = await getIngredients()

  return (
    <html lang="en">
      <body
        className={`${manrope.className} mx-auto flex min-h-screen flex-col items-center bg-stone-100`}
      >
        <Toaster
          containerStyle={{
            top: 100,
          }}
          toastOptions={{
            success: {
              duration: 2000,
            },
          }}
        />
        <AppInitializer
          products={products}
          categories={categories}
          ingredients={ingredients}
        />
        <AppHeader />
        <main className="mt-[84px] flex w-full flex-1 justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}

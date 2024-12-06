import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import AppHeader from "@/components/header/AppHeader"
import {
  getCategories,
  getIngredients,
  getOrders,
  getProducts,
} from "@/utils/data-service"
import { AppInitializer } from "@/components/AppInitializer"
import { Toaster } from "react-hot-toast"
import { getUser } from "@/utils/user-service"
import { SignInModal } from "@/components/SignInModal"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ninja Pizza Tech",
  description: "",
}

export const revalidate = 100000

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [products, categories, ingredients, orders, user] = await Promise.all([
    getProducts(),
    getCategories(),
    getIngredients(),
    getOrders(),
    getUser(),
  ])

  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="48x48" href="favicon.jpg" />
      </head>
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
        <SignInModal />
        <AppInitializer
          products={products}
          categories={categories}
          ingredients={ingredients}
          orders={orders}
          user={user}
        />
        <AppHeader />
        <main className="mt-[60px] flex w-full flex-1 justify-center md:mt-[68px] xl:mt-[84px]">
          {children}
        </main>
      </body>
    </html>
  )
}

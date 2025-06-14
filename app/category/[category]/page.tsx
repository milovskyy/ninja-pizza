import { notFound } from "next/navigation"

import { getCategoryColor, getProductsByCategory } from "@/utils/data-service"
import { cn } from "@/utils/utils"

import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MenuCategory from "@/components/MenuCategory"
import MenuCategories from "@/components/MenuCategories"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"

type PropsType = {
  params: { category: string }
  searchParams: { filter: string }
}

export const revalidate = 1000

export default async function Page({ params, searchParams }: PropsType) {
  const { category } = params

  const filter = searchParams?.filter ?? "all"

  const [products, categoryRow] = await Promise.all([
    getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1)),
    getCategoryColor(category),
  ])

  if (!products || !categoryRow) return notFound()

  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex w-full flex-1 justify-center px-3",
      )}
      style={{
        background: `linear-gradient(180deg, ${categoryRow.color} 0%, #f5f5f4 80%)`,
      }}
    >
      <Container className="mt-[60px] flex flex-col px-0 md:mt-[68px] xl:mt-[84px]">
        <Navigation categoryName={categoryRow.name} />
        {products.length !== 0 && (
          <MenuCategory
            products={products}
            name={categoryRow.name}
            filter={filter}
          />
        )}
        <h2 className="my-10 text-center text-3xl font-extrabold">
          Take a look at other categories
        </h2>
        <MenuCategories separate={true} />
        <div className="my-10">
          <MobileAppBanner />
        </div>
        <AppFooter />
      </Container>
    </div>
  )
}

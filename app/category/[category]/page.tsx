import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MenuCategory from "@/components/MenuCategory"
import MenuCategories from "@/components/MenuCategories"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { getCategoryColor, getProductsByCategory } from "@/lib/data-service"
import { cn } from "@/lib/utils"

type PropsType = {
  params: { category: string }
  searchParams: { filter: string }
}

export const revalidate = 10000
// export const revalidate = 0 - no sense because of dynamic rendering

export default async function Page({ params, searchParams }: PropsType) {
  const { category } = params

  const filter = searchParams?.filter ?? "all"

  // ФИЛЬТРОВАТЬ ПРОДУКТЫ ПО ISNEW

  const [products, { name, color }] = await Promise.all([
    getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1)),
    getCategoryColor(category),
  ])

  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex w-full flex-1 justify-center px-3",
      )}
      style={{
        background: `linear-gradient(180deg, ${color} 0%, #f5f5f4 80%)`,
      }}
    >
      <Container className="mt-[84px] flex flex-col">
        <Navigation category={name} />
        {products.length !== 0 && (
          <MenuCategory products={products} name={name} filter={filter} />
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

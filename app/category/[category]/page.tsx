import AppFooter from "@/app/_components/footer/AppFooter"
import MainMenuCategory from "@/app/_components/MainMenuCategory"
import MenuCategories from "@/app/_components/MenuCategories"
import MobileAppBanner from "@/app/_components/MobileAppBanner"
import Navigation from "@/app/_components/NavigationCategory"
import { getCategoryColor, getProductsByCategory } from "@/lib/data-service"
import { cn } from "@/lib/utils"

type PropsType = {
  params: { category: string }
  searchParams: { filter: string }
}

// export const revalidate = 0 - no sense because of dynamic rendering
export const revalidate = 0
// export const revalidate = 0 - no sense because of dynamic rendering

export default async function Page({ params, searchParams }: PropsType) {
  const { category } = params

  const filter = searchParams?.filter ?? "all"

  // const filter = "seafood"

  const [products, { name, color }] = await Promise.all([
    getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1)),
    getCategoryColor(category),
  ])

  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex w-full flex-1 justify-center bg-gradient-to-b from-cyan-500 to-blue-100",
      )}
      style={{
        background: `linear-gradient(180deg, ${color} 0%, #f5f5f4 80%)`,
      }}
    >
      <div className="mt-[84px] flex flex-col">
        <Navigation name={name} />
        {products.length !== 0 && (
          <MainMenuCategory products={products} name={name} filter={filter} />
        )}
        {/* <MainMenuCategory products={products} name={name} /> */}
        <h2 className="my-10 text-center text-3xl font-extrabold">
          Take a look at other categories
        </h2>
        <MenuCategories separate={true} />
        <div className="my-10">
          <MobileAppBanner />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

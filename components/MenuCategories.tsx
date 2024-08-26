import { getCategories } from "@/lib/data-service"
import MenuCategoriesElement from "./MenuCategoriesElement"

type PropsType = {
  separate?: boolean
}

export const revalidate = 0

// сортировать чтоб сначала новые шли

async function MenuCategories({ separate }: PropsType) {
  const categories = await getCategories()

  return (
    <div className={`flex ${separate && "w-full gap-2"}`}>
      {categories.map((category) => {
        return (
          <MenuCategoriesElement
            key={category.linkName}
            category={category}
            separate={separate}
          />
        )
      })}
    </div>
  )
}

export default MenuCategories

const x1 = [
  "Dough made of four types of flour",
  "Mozzarella",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]

const x11 = [
  "Parmesan",
  "Crispy fried onion",
  "Jalapeno pepper",
  "Pickles",
  "Salzburg poultry sausages",
  "Mustard-pickled cucumbers",
  "Bread",
]

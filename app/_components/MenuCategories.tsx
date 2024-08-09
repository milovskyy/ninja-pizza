import NavigationMenuElement from "./MenuCategoriesElement"

const menuCategories = [
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/categories/pizza2x.webp",
    label: "Pizza",
    link: "pizza",
    color: "bg-[#fff3dd]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/categories/snacks2x.webp",
    label: "Snacks",
    link: "snacks",
    color: "bg-[#f0efff]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/categories/drinks2x.webp",
    label: "Drinks",
    link: "drinks",
    color: "bg-[#e3f3ff]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/categories/sauces2x.webp",
    label: "Extras",
    link: "extras",
    color: "bg-[#e4f1c6]",
  },
  {
    image:
      "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/categories/desert3x.webp",
    label: "Desserts",
    link: "desserts",
    color: "bg-[#ffe1e1]",
  },
]

type PropsType = {
  separate?: boolean
}

// сортировать чтоб сначала новые шли

function MenuCategories({ separate }: PropsType) {
  return (
    <div className={`flex ${separate && "w-full gap-2"}`}>
      {menuCategories.map((category) => {
        return (
          <NavigationMenuElement
            key={category.link}
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

const x11 = ["Choux pastry", "MMaple syrup", "Cashews"]

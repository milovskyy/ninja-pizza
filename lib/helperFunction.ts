import { ProductType } from "@/app/_types/TypeProduct"

type PropsType = {
  // id: number
  // name: string
  // category: string
  // ingredients: string[]
  // price: number
  // size: string
  // hit: null | boolean
  // meat: null | boolean
  // isNew: null | boolean
  // seafood: null | boolean
  // spicy: null | boolean
  // vegetarian: null | boolean
  // alcohol: null | boolean
}

export const initialSort = (products: ProductType[]) => {
  const productsByCategories = products.reduce((acc, curr) => {
    const category = curr.category as string

    if (!acc[category]) {
      acc[category] = { name: curr.category, products: [] }
    }
    acc[category].products.push(curr)
    return acc
  }, [])

  // const productsByCategories = {
  //   Pizza: { name: "Pizza", products: [] },
  //   Snacks: { name: "Snacks", products: [] },
  //   Desserts: { name: "Desserts", products: [] },
  //   Drinks: { name: "Drinks", products: [] },
  //   Extras: { name: "Extras", products: [] },
  // }

  // products.forEach((element) => {
  //   const category = element.category
  //   productsByCategories[category].products.push(element)
  //   // console.log(productsByCategories[category].products)
  // })

  const result = Object.values(productsByCategories)

  return result
}

// const result = values.sort((a, b) => {
//   if (a.name === "Pizza" && b.name !== "Pizza") {
//     return -1
//   } else if (a.name !== "Pizza" && b.name === "Pizza") {
//     return 1
//   } else {
//     return 0
//   }
// })

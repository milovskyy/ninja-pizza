import { ProductType } from "@/app/_types/TypeProduct"

export const categoryProductsByLinkname = (
  products: ProductType[],
  linkName: string,
) => {
  const category = products.find((product) => product.linkName === linkName)

  const filteredProducts = products.filter(
    (obj) => obj.category === category?.category,
  )

  return filteredProducts
}

export const groupProductsByCategory = (products: ProductType[]) => {
  const productsByCategory = products.reduce(
    (productsByCategory, product) => {
      const category = product.category

      if (!productsByCategory[category]) {
        productsByCategory[category] = {
          name: category,
          products: [],
        }
      }

      productsByCategory[category].products.push(product)

      return productsByCategory
    },
    {} as { [category: string]: { name: string; products: ProductType[] } },
  )

  return Object.values(productsByCategory)
}

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

// const result = values.sort((a, b) => {
//   if (a.name === "Pizza" && b.name !== "Pizza") {
//     return -1
//   } else if (a.name !== "Pizza" && b.name === "Pizza") {
//     return 1
//   } else {
//     return 0
//   }
// })

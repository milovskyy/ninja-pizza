export type ProductType = {
  id: number
  name: string
  category: string
  ingredients: string[]
  price: number
  size: string
  hit: null | boolean
  meat: null | boolean
  isNew: null | boolean
  seafood: null | boolean
  spicy: null | boolean
  vegetarian: null | boolean
  alcohol: null | boolean
}

export type CategoryType = {
  id: number
  name: string
  linkName: string
  image: string
  color: string
}

// export type AllProductsType = {
//   products: ProductType[]
// }

export type SeparateMenuType = { name: string; products: ProductType[] }

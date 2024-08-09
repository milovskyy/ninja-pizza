export type ProductType = {
  id: number
  name: string
  linkName: string
  category: string
  image: string
  ingredients: string[]
  price: number
  size: string
  hit: null | boolean
  meat: null | boolean
  isNew: null | boolean
  seafood: null | boolean
  spicy: null | boolean
  vegetarian: null | boolean
}

export type AllProductsType = {
  products: ProductType[]
}

export type SeparateMenuType = [
  { name: string; products: ProductType[] },
  { name: string; products: ProductType[] },
]

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
  linkName: string
  image: string
}

export type CategoryType = {
  id: number
  name: string
  linkName: string
  image: string
  color: string
}

export type IngredientType = {
  id: number
  name: string
  image: string
  price: number
  extra: boolean
}

export type SeparateMenuType = { name: string; products: ProductType[] }

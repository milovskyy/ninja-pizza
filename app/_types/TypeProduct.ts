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

export type cartProductType = {
  id: number
  name: string
  price: number
  size: string
  image: string
  quantity: number
  linkName: string
  category: string
}

export type cartType = {
  id: number
  userId: string
  token: string
  items: cartProductType[]
  totalAmount: number
  // createdAt: Date
  // updatedAt: Date
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

export type OrderType = {
  id: number
  created: string
  updated?: string | null
  name: string
  phone: string
  method: string
  address: string
  date: string
  time: string
  persons: string
  choices: string
  change: string
  comment: string
  payment: string
  paymentID: string
  user: string
  status: string
  items: string
  totalAmount: number
}

export type newOrderType = {
  created: string
  updated?: string | null
  name: string
  phone: string
  method: string
  address: string
  date: string
  time: string
  persons: string
  choices: string
  change: string
  comment: string
  payment: string
  paymentID: string
  user: string
  status: string
  items: string
  totalAmount: number
}

export type SeparateMenuType = { name: string; products: ProductType[] }

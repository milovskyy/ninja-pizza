"use client"

import { useCart } from "@/app/_store/cart"
import { ProductType } from "@/app/_types/TypeProduct"

export const useCartActions = (cartProduct: cartProductType) => {
  const { name, price, size, image, id } = product
  const { add, remove, increase, decrease } = useCart()

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      size,
      image,
      quantity: 1,
    }
    add(product)
  }

  const handleRemoveFromCart = () => {
    const product = {
      id,
      name,
      price,
      size,
      image,
      quantity: 1,
    }
    remove(product)
  }

  const handleIncrease = () => {
    const product = {
      id,
      name,
      price,
      size,
      image,
      quantity: 1,
    }
    increase(product)
  }
  const handleDecrease = () => {
    const product = {
      id,
      name,
      price,
      size,
      image,
      quantity: 1,
    }
    decrease(product)
  }

  return {
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
  }
}

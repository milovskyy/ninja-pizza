import { useCart } from "@/app/_store/cart"
import { cartProductType } from "@/app/_types/Types"
import { useLocalStorage } from "react-use"

export const useCartActions = () => {
  const { add, cart, increase, decrease, remove, deleteCart } = useCart()

  const [value, setValue] = useLocalStorage("cart")

  const handleAdd = (cartProduct: cartProductType) => {
    add(cartProduct)
    setValue([...cart, cartProduct])
  }

  const handleDeleteCart = () => {
    deleteCart()
    setValue([])
  }

  const handleRemove = (cartProduct: cartProductType) => {
    remove(cartProduct)
    setValue(cart.filter((item) => item.id !== cartProduct.id))
  }

  const handleIncrease = (cartProduct: cartProductType) => {
    increase(cartProduct)
    const items = cart.map((item) =>
      item.id === cartProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
    setValue(items)
  }

  const handleDecrease = (cartProduct: cartProductType) => {
    decrease(cartProduct)
    const items = cart
      .map((item) =>
        item.id === cartProduct.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter((item) => item.quantity > 0)
    setValue(items)
  }

  return {
    handleAdd,
    handleRemove,
    handleIncrease,
    handleDecrease,
    handleDeleteCart,
  }
}

import { useCart } from "@/app/_store/cart"
import { useUser } from "@/app/_store/user"
import { cartProductType } from "@/app/_types/Types"
import { updateUserCart } from "@/utils/actions"
import { useLocalStorage } from "react-use"

export const useCartActions = () => {
  const { add, cart, increase, decrease, remove, deleteCart } = useCart()
  const { user } = useUser()

  const [value, setValue] = useLocalStorage("cart")

  const addProductToCardAction = (cartProduct: cartProductType) => {
    const isInCart = cart.some((item) => item.id === cartProduct.id)
    if (!isInCart) {
      add(cartProduct)
      setValue([...cart, cartProduct])
      if (user?.id) updateUserCart([...cart, cartProduct], user.id)
    }
    if (isInCart) {
      increase(cartProduct)
      const items = cart.map((item) =>
        item.id === cartProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      setValue(items)
      if (user?.id) updateUserCart(items, user.id)
    }
  }

  const deleteCartAction = () => {
    deleteCart()
    setValue([])
    if (user?.id) updateUserCart([], user?.id)
  }

  const removeProductFromCartAction = (cartProduct: cartProductType) => {
    remove(cartProduct)
    setValue(cart.filter((item) => item.id !== cartProduct.id))
    if (user?.id)
      updateUserCart(
        cart.filter((item) => item.id !== cartProduct.id),
        user?.id,
      )
  }

  const increaseProductCartAction = (cartProduct: cartProductType) => {
    increase(cartProduct)
    const items = cart.map((item) =>
      item.id === cartProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
    setValue(items)
    if (user?.id) updateUserCart(items, user?.id)
  }

  const decreaseProductCartAction = (cartProduct: cartProductType) => {
    decrease(cartProduct)
    const items = cart
      .map((item) =>
        item.id === cartProduct.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter((item) => item.quantity > 0)
    setValue(items)
    if (user?.id) updateUserCart(items, user?.id)
  }

  return {
    addProductToCardAction,
    removeProductFromCartAction,
    increaseProductCartAction,
    decreaseProductCartAction,
    deleteCartAction,
  }
}

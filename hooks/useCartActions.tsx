import { useCart } from "@/app/_store/cart"
import { useUser } from "@/app/_store/user"
import { CartProductType } from "@/app/_types/Types"
import { updateUserCart } from "@/utils/actions"
import { useLocalStorage } from "react-use"

export const useCartActions = () => {
  const { add, cart, increase, decrease, remove, deleteCart } = useCart()
  const { user } = useUser()

  const [value, setValue] = useLocalStorage("cart")

  const addProductsToCartAction = (cartProducts: CartProductType[]) => {
    setValue((prevCart: any) => {
      let updatedCart = [...prevCart] // Копируем текущую корзину

      cartProducts.forEach((cartProduct) => {
        // Проверяем, есть ли каждый товар в корзине
        const isInCart = updatedCart.some((item) => item.id === cartProduct.id)

        if (!isInCart) {
          // Если товара нет в корзине, добавляем его
          updatedCart = [...updatedCart, cartProduct]
          add(cartProduct) // Обновляем корзину в контексте
        } else {
          // Если товар уже есть в корзине, увеличиваем его количество
          updatedCart = updatedCart.map((item) =>
            item.id === cartProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
          increase(cartProduct) // Увеличиваем количество в контексте
        }
      })

      // Если пользователь авторизован, обновляем данные на сервере
      if (user?.id) {
        updateUserCart(updatedCart, user.id)
      }

      // Возвращаем обновлённый массив корзины
      return updatedCart
    })
  }

  const addProductToCartAction = (cartProduct: CartProductType) => {
    const isInCart = cart.some((item) => item.id === cartProduct.id)

    let updatedCart

    if (!isInCart) {
      updatedCart = [...cart, cartProduct]
      add(cartProduct)
    } else {
      updatedCart = cart.map((item) =>
        item.id === cartProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      increase(cartProduct)
    }

    setValue(updatedCart)

    if (user?.id) {
      updateUserCart(updatedCart, user.id)
    }
  }

  const deleteCartAction = () => {
    deleteCart()
    setValue([])
    if (user?.id) updateUserCart([], user?.id)
  }

  const removeProductFromCartAction = (cartProduct: CartProductType) => {
    remove(cartProduct)
    setValue(cart.filter((item) => item.id !== cartProduct.id))
    if (user?.id)
      updateUserCart(
        cart.filter((item) => item.id !== cartProduct.id),
        user?.id,
      )
  }

  const increaseProductCartAction = (cartProduct: CartProductType) => {
    increase(cartProduct)
    const items = cart.map((item) =>
      item.id === cartProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
    setValue(items)
    if (user?.id) updateUserCart(items, user?.id)
  }

  const decreaseProductCartAction = (cartProduct: CartProductType) => {
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
    addProductToCartAction,
    addProductsToCartAction,
    removeProductFromCartAction,
    increaseProductCartAction,
    decreaseProductCartAction,
    deleteCartAction,
  }
}

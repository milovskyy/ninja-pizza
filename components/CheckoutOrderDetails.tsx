import { Button } from "./ui/button"
import { CartItem } from "./CartItem"
import { DELIVERYPRICE } from "@/app/_constants/constants"
import { CartProductType } from "@/app/_types/Types"
import { CartEmpty } from "./CartEmpty"

type Props = {
  method: string
  cart: CartProductType[]
  cartTotalPrice: number
  orderId?: number
  isloading?: boolean
}

export const CheckoutOrderDetails = ({
  method,
  cart,
  cartTotalPrice,
  orderId,
  isloading,
}: Props) => {
  if (cart.length === 0)
    return (
      <div className="max-h-[800px]">
        <CartEmpty />
      </div>
    )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 bg-white first-line:pt-6">
        <h2 className="p-3 text-xl font-bold xs:p-4 sm:mb-2 sm:p-6">
          {orderId ? `Order #${orderId}` : "Your order"}
        </h2>

        <div className="flex flex-col gap-2 px-3 xs:px-4 sm:px-6">
          {cart?.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <p className="mb-2 flex h-7 items-center justify-center p-1 pl-5 text-sm font-semibold text-stone-400">
          {method === "Delivery" && " Free delivery from 500 UAH"}
        </p>
      </div>

      <div className="flex justify-between bg-primary p-6">
        <div className="flex gap-4">
          {cartTotalPrice < 500 && method === "Delivery" && (
            <div className="gap2 flex flex-col">
              <h3 className="text-sm font-medium text-stone-600">Delivery:</h3>
              <div className="flex gap-2">
                <div className="text-xl font-bold text-stone-900">
                  {DELIVERYPRICE}
                </div>
                <div className="text-sm font-medium text-stone-600">UAH</div>
              </div>
            </div>
          )}
          <div className="gap2 flex flex-col">
            <h3 className="text-sm font-medium text-stone-600">
              Order amount:
            </h3>
            <div className="flex gap-2">
              <div className="text-xl font-bold text-stone-900">
                {cartTotalPrice < 500 && method === "Delivery"
                  ? cartTotalPrice + DELIVERYPRICE
                  : cartTotalPrice}
              </div>
              <div className="text-sm font-medium text-stone-600">UAH</div>
            </div>
          </div>
        </div>

        <Button
          className="bg-white font-extrabold hover:bg-white"
          disabled={isloading}
          type="submit"
        >
          {orderId ? "Update order" : "Place order"}
        </Button>
      </div>
    </div>
  )
}

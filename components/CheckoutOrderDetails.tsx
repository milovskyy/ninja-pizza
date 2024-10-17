import { Button } from "./ui/button"
import { CartItem } from "./CartItem"
import { DELIVERYPRICE } from "@/app/_constants/constants"
import { cartProductType } from "@/app/_types/TypeProduct"

type Props = {
  method: string
  cart: cartProductType[]
  cartTotalPrice: number
  orderId?: number
}

export const CheckoutOrderDetails = ({
  method,
  cart,
  cartTotalPrice,
  orderId,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 bg-white first-line:pt-6">
        <h2 className="mb-2 px-6 pt-6 text-xl font-bold">
          {orderId ? `Order #${orderId}` : "Your order"}
        </h2>

        <div className="flex flex-col gap-2 px-6">
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
          type="submit"
        >
          {orderId ? "Update order" : "Place order"}
        </Button>
      </div>
    </div>
  )
}

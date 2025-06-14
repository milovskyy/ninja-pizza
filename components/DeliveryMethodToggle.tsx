type Props = {
  method: string
  setMethod: React.Dispatch<React.SetStateAction<string>>
}

export const DeliveryMethodToggle = ({ method, setMethod }: Props) => {
  return (
    <div className="relative flex w-full justify-between gap-3 rounded-full bg-stone-100">
      <div
        className={`absolute left-0 top-1 flex h-8 w-[50%] items-center justify-center px-1 transition sm:h-10 ${method === "Pickup" && "translate-x-[100%]"}`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary font-bold">
          {method}
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer p-2 text-center font-bold sm:p-3"
        onClick={() => setMethod("Delivery")}
      >
        Delivery
      </div>
      <div
        className="flex-1 cursor-pointer p-2 text-center font-bold sm:p-3"
        onClick={() => setMethod("Pickup")}
      >
        Pickup
      </div>
    </div>
  )
}

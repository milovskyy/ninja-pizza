import { Button } from "@/components/ui/button"

function PlaceOrder() {
  return (
    <div className="flex w-[150px] flex-col gap-4 overflow-hidden xs:w-[190px]">
      <p className="px-2 text-sm font-semibold text-stone-400 max-xs:px-0">
        Place an order:
      </p>

      <Button
        variant={"phone"}
        size={"phone"}
        className="max-xs:px-0 max-xs:text-sm"
      >
        {"+38 (095) 344 22 44"}
      </Button>
      <Button
        variant={"phone"}
        size={"phone"}
        className="max-xs:px-0 max-xs:text-sm"
      >
        {"+38 (067) 344 22 44"}
      </Button>
      <Button
        variant={"phone"}
        size={"phone"}
        className="max-xs:px-0 max-xs:text-sm"
      >
        {" +38 (063) 344 22 44"}
      </Button>

      <p className="px-2 text-sm text-stone-400 max-xs:max-w-[170px] max-xs:px-0">
        Call us from 11:00 to 22:30 seven days a week
      </p>
    </div>
  )
}

export default PlaceOrder

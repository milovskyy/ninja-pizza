import ButtonPhoneCall from "./ButtonPhoneCall"

function PlaceOrder() {
  return (
    <div className="flex flex-col gap-4">
      <p className="px-2 text-sm text-stone-400">Place an order:</p>
      <ButtonPhoneCall number="+38 (095) 344 22 44" />
      <ButtonPhoneCall number="+38 (067) 344 22 44" />
      <ButtonPhoneCall number="+38 (063) 344 22 44" />

      <p className="px-2 text-sm text-stone-400">
        Call us from 11:00 to 22:30 seven days a week
      </p>
    </div>
  )
}

export default PlaceOrder

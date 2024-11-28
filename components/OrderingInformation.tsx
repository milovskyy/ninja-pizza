import Image from "next/image"
import Link from "next/link"
import { OrderingInformationBlock } from "./OrderingInformationBlock"

type Props = {}

export const OrderingInformation = ({}: Props) => {
  return (
    <div className="my-10 flex flex-col gap-3 px-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      <OrderingInformationBlock
        image="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/delivery.svg"
        title="Delivery"
        text="Free from 500 UAH"
      />
      <OrderingInformationBlock
        image="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/clock.svg"
        title="Working hours:"
        text="from 11:00 to 22:30"
      />
      <OrderingInformationBlock
        image="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/orderingInfo/map.svg"
        title="Delivery zone"
        text=" View on the map"
      />
    </div>
  )
}

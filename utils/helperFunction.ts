import { DEFAULT_TIME_ARRAY } from "@/app/_constants/constants"
import { OrderType, ProductType } from "@/app/_types/TypeProduct"
import {
  format,
  addDays,
  addMinutes,
  setHours,
  setMinutes,
  isAfter,
  isValid,
  parse,
  compareAsc,
} from "date-fns"

export const categoryProductsByLinkname = (
  products: ProductType[],
  linkName: string,
) => {
  const category = products.find((product) => product.linkName === linkName)

  const filteredProducts = products
    .filter((obj) => obj.category === category?.category)
    .sort((a, b) => (a.isNew === true ? 0 : 1) - (b.isNew === true ? 0 : 1))

  return filteredProducts
}

export const groupProductsByCategory = (products: ProductType[]) => {
  const productsByCategory = products.reduce(
    (productsByCategory, product) => {
      const category = product.category

      if (!productsByCategory[category]) {
        productsByCategory[category] = {
          name: category,
          products: [],
        }
      }

      productsByCategory[category].products.push(product)

      return productsByCategory
    },
    {} as { [category: string]: { name: string; products: ProductType[] } },
  )

  return Object.values(productsByCategory)
}

export const getDeliveryDays = () => {
  const days = []
  const now = new Date()
  const nineOClock = setHours(setMinutes(new Date(), 0), 21)
  const isTooLate: boolean = isAfter(now, nineOClock)
  if (!isTooLate) days.push("Today")
  days.push("Tomorrow")
  for (let i = 2; i < 7; i++) {
    const nextDate = addDays(now, i)
    days.push(format(nextDate, "dd-MM-yy"))
  }
  return days
}

// export const getDeliveryTimes = () => {
//   const timeSlots = []
//   const now = new Date()
//   const nineOClock = setHours(setMinutes(new Date(), 0), 21)
//   const isTooLate: boolean = isAfter(now, nineOClock)
//   if (isTooLate) return DEFAULT_TIME_ARRAY

//   timeSlots.push("The nearest time")

//   const minutes = now.getMinutes()
//   const nextQuarterHour = Math.ceil(minutes / 15) * 15
//   const firstSlotTime = new Date(now)
//   firstSlotTime.setMinutes(nextQuarterHour + 105)

//   if (firstSlotTime.getHours() >= 24) {
//     firstSlotTime.setHours(23, 59)
//   }

//   let currentTime = firstSlotTime

//   const endTime = new Date()
//   endTime.setHours(22, 0, 0, 0)

//   while (currentTime <= endTime) {
//     timeSlots.push(format(currentTime, "HH:mm"))
//     currentTime = addMinutes(currentTime, 15)
//   }

//   return timeSlots
// }

export const getDeliveryTimes = (): string[] => {
  const timeSlots: string[] = []
  const now = new Date()
  const nineOClock = setHours(setMinutes(new Date(), 0), 21)

  const isTooLate: boolean = isAfter(now, nineOClock)
  if (isTooLate) return DEFAULT_TIME_ARRAY

  timeSlots.push("The nearest time")

  const minutes = now.getMinutes()
  const nextQuarterHour = Math.ceil(minutes / 15) * 15
  const firstSlotTime = new Date(now)

  firstSlotTime.setHours(13, 0)

  if (firstSlotTime <= now) {
    firstSlotTime.setMinutes(nextQuarterHour + 105)
  }

  if (firstSlotTime.getHours() >= 24) {
    firstSlotTime.setHours(23, 59)
  }

  let currentTime = firstSlotTime
  const endTime = new Date()
  endTime.setHours(22, 0, 0, 0)

  while (currentTime <= endTime) {
    timeSlots.push(format(currentTime, "HH:mm"))
    currentTime = addMinutes(currentTime, 15)
  }

  return timeSlots
}

interface GroupedEvent {
  date: string
  events: OrderType[]
}

export const sortOrders = (orders: OrderType[]) => {
  // const data = [
  //   { name: "Event A", date: "16-10-24", time: "09:00" },
  //   { name: "Event B", date: "14-10-24", time: "16:30" },
  //   { name: "Event C", date: "14-10-24", time: "10:30" },
  //   { name: "Event D", date: "14-10-24", time: "19:30" },
  // ]

  const parseDateTime = (dateString: string, timeString: string) => {
    const date = parse(dateString, "dd-MM-yy", new Date())
    if (!isValid(date)) return null

    if (timeString === "The nearest time") {
      return date // Return date object for 'The nearest time'
    }

    const [hours, minutes] = timeString.split(":").map(Number)
    date.setHours(hours, minutes) // Set the hours and minutes on the date object
    return date
  }

  const groupedByDate: Record<string, OrderType[]> = orders.reduce(
    (acc, curr) => {
      const dateKey = curr.date
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(curr)
      return acc
    },
    {} as Record<string, OrderType[]>,
  )

  const sortedGroups: GroupedEvent[] = Object.entries(groupedByDate).map(
    ([date, events]) => {
      events.sort((a, b) => {
        if (a.time === "The nearest time" && b.time !== "The nearest time")
          return -1
        if (b.time === "The nearest time" && a.time !== "The nearest time")
          return 1
        return compareAsc(
          parseDateTime(date, a.time) as Date,
          parseDateTime(date, b.time) as Date,
        )
      })
      return { date, events }
    },
  )

  const sortedData: OrderType[] = sortedGroups.flatMap((group) => group.events)

  return sortedData
}
// ;[
//   { name: "Event A", date: "16-10-24", time: "The nearest time" },
//   { name: "Event B", date: "14-10-24", time: "The nearest time" },
//   { name: "Event C", date: "14-10-24", time: "10:30" },
//   { name: "Event D", date: "14-10-24", time: "The nearest time" },
//   { name: "Event E", date: "16-10-24", time: "19:30" },
//   { name: "Event F", date: "14-10-24", time: "17:30" },
//   { name: "Event G", date: "16-10-24", time: "12:30" },
//   { name: "Event G", date: "16-10-24", time: "The nearest time" },
// ],
// ;[
//   { name: "Event B", date: "14-10-24", time: "The nearest time" },
//   { name: "Event D", date: "14-10-24", time: "The nearest time" },
//   { name: "Event C", date: "14-10-24", time: "10:30" },
//   { name: "Event F", date: "14-10-24", time: "17:30" },
//   { name: "Event A", date: "16-10-24", time: "The nearest time" },
//   { name: "Event G", date: "16-10-24", time: "The nearest time" },
//   { name: "Event G", date: "16-10-24", time: "12:30" },
//   { name: "Event E", date: "16-10-24", time: "19:30" },
// ]

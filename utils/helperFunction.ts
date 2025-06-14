import { OrderType, ProductType } from "@/app/_types/Types"
import {
  format,
  addDays,
  addMinutes,
  isValid,
  parse,
  compareAsc,
  isToday,
  isAfter,
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

  days.push("Today")
  days.push("Tomorrow")
  for (let i = 2; i < 7; i++) {
    const nextDate = addDays(now, i)
    days.push(format(nextDate, "dd-MM-yy"))
  }
  return days
}

export const getDeliveryTimes = (): string[] => {
  const timeSlots: string[] = []
  const now = new Date()

  timeSlots.push("The nearest time")

  const minutes = now.getMinutes()
  const nextQuarterHour = Math.ceil(minutes / 15) * 15
  const firstSlotTime = new Date(now)

  if (firstSlotTime <= now) {
    firstSlotTime.setMinutes(nextQuarterHour + 105)
  }

  if (firstSlotTime.getHours() >= 24) {
    firstSlotTime.setHours(23, 59)
  }

  let currentTime = firstSlotTime
  const endTime = new Date()
  endTime.setHours(23, 0, 0, 0)

  while (currentTime <= endTime) {
    timeSlots.push(format(currentTime, "HH:mm"))
    currentTime = addMinutes(currentTime, 15)
  }

  return timeSlots
}

export const sortOrderProductsByCategoryOrder = (items: any) => {
  const categoryOrder: { [key: string]: number } = {
    Pizza: 1,
    Snacks: 2,
    Desserts: 3,
    Extras: 4,
    Drinks: 5,
  }
  const sortedProducts = items.sort((a: any, b: any) => {
    return (
      (categoryOrder[a.category] || Infinity) -
      (categoryOrder[b.category] || Infinity)
    )
  })
  return sortedProducts
}

interface GroupedEvent {
  date: string
  events: OrderType[]
}

export const sortOrdersByDateTime = (
  orders: OrderType[],
  time: string | null,
) => {
  orders.sort((a, b) => {
    const dateA = parse(a.date, "dd-MM-yy", new Date())
    const dateB = parse(b.date, "dd-MM-yy", new Date())

    if (!isValid(dateA) || !isValid(dateB)) {
      throw new Error("Invalid date format")
    }

    return dateA.getTime() - dateB.getTime()
  })

  const parseDateTime = (dateString: string, timeString: string) => {
    const date = parse(dateString, "dd-MM-yy", new Date())
    if (!isValid(date)) return null

    if (timeString === "The nearest time") {
      return date
    }

    const [hours, minutes] = timeString.split(":").map(Number)
    date.setHours(hours, minutes)
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

  let data = sortedData

  if (time === "History") return data

  if (time === "Today") {
    data = sortedData.filter(
      (order) => order.date === format(new Date(), "dd-MM-yy"),
    )
    return data
  }

  data = sortedData.filter((order) => {
    const itemDate = parse(order.date, "dd-MM-yy", new Date())
    return isToday(itemDate) || isAfter(itemDate, new Date())
  })

  return data
}

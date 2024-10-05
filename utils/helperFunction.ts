import { ProductType } from "@/app/_types/TypeProduct"
import { format, addDays, addMinutes } from "date-fns"

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
  const today = new Date()
  days.push("Today")
  days.push("Tomorrow")
  for (let i = 2; i < 7; i++) {
    const nextDate = addDays(today, i)
    days.push(format(nextDate, "dd.MM.yy"))
  }
  return days
}

export const getDeliveryTimes = () => {
  const timeSlots = []
  const now = new Date()
  // const twentyOClock = setHours(setMinutes(new Date(), 0), 20)
  // if (isAfter(now, twentyOClock)) return DEFAULT_TIME_ARRAY

  timeSlots.push("The nearest time")

  const minutes = now.getMinutes()
  const nextQuarterHour = Math.ceil(minutes / 15) * 15
  const firstSlotTime = new Date(now)
  firstSlotTime.setMinutes(nextQuarterHour + 105)

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

// DEFAULT_TIME_ARRAY

"use client"

import { Container } from "@/components/Container"
import { cn } from "@/utils/utils"
import { useState } from "react"

const ideal60 = [
  { start: "09:00", end: "10:00" },
  { start: "10:15", end: "11:15" },
  { start: "11:30", end: "12:30" },
  { start: "12:45", end: "13:45" },
  { start: "14:00", end: "15:00" },
  { start: "15:15", end: "16:15" },
  { start: "16:30", end: "17:30" },
  { start: "17:45", end: "18:45" },
  { start: "19:00", end: "20:00" },
]
const ideal90 = [
  { start: "09:00", end: "10:30" },
  { start: "10:45", end: "12:15" },
  { start: "12:30", end: "14:00" },
  { start: "14:15", end: "15:45" },
  { start: "16:00", end: "17:30" },
  { start: "17:45", end: "19:15" },
]

const ideal120 = [
  { start: "09:00", end: "11:00" },
  { start: "11:15", end: "13:15" },
  { start: "13:30", end: "16:30" },
  { start: "15:45", end: "17:45" },
  { start: "18:00", end: "20:00" },
]
export default function Calendar() {
  const [timeRange, setTimeRange] = useState<number>(60)
  const [bookings, setBookings] = useState<Booking[]>([
    // { start: "12:00", end: "16:00" },
  ])

  type Slot = { start: string; end: string }
  type Booking = { start: string; end: string }

  const timeToMinutes = (time: string): number => {
    const [h, m] = time.split(":").map(Number)
    return h * 60 + m
  }

  const minutesToTime = (minutes: number): string => {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
  }

  // Проверяем, доступен ли слот
  const isTimeSlotAvailable = (
    start: number,
    end: number,
    bookings: Booking[],
  ): boolean => {
    // Проверка пересечения с существующими бронированиями
    for (const booking of bookings) {
      const bookedStart = timeToMinutes(booking.start) - 15
      const bookedEnd = timeToMinutes(booking.end) + 15 // +15 минут уборки

      // Если есть пересечение
      // if (start (09:00) < bookedEnd (13:15) && end (09:00 + 60 = 10:00 ) >= bookedStart (10:01)) {
      if (start < bookedEnd && end > bookedStart) {
        return false
      }
    }
    return true
  }

  const generateAvailableSlots = (
    duration: number,
    bookings: Booking[],
  ): Slot[] => {
    const OPEN_TIME = 9 * 60 // 09:00 в минутах
    const CLOSE_TIME = 20 * 60 // 20:00 в минутах
    const CLEANUP_TIME = 15 // 15 минут на подготовку

    let slots: Slot[] = []
    let currentTime = OPEN_TIME

    while (currentTime + duration <= CLOSE_TIME) {
      const endTime = currentTime + duration

      if (isTimeSlotAvailable(currentTime, endTime, bookings)) {
        slots.push({
          start: minutesToTime(currentTime),
          end: minutesToTime(endTime),
        })

        // Смещаемся на следующий возможный слот (учитываем время уборки)
        currentTime = endTime + CLEANUP_TIME
      } else {
        // Ищем следующее доступное время
        let nextAvailableTime = CLOSE_TIME
        for (const booking of bookings) {
          const bookedEnd = timeToMinutes(booking.end) + CLEANUP_TIME
          if (bookedEnd > currentTime && bookedEnd < nextAvailableTime) {
            nextAvailableTime = bookedEnd
          }
        }
        currentTime = nextAvailableTime
      }
    }

    return slots
  }

  // Пример существующих броней
  // const bookings: Booking[] = [
  //   { start: "10:45", end: "13:00" },
  //   { start: "15:45", end: "17:15" },
  // ]

  const timeSlots = generateAvailableSlots(timeRange, bookings)

  return (
    <Container className="flex items-center justify-center gap-52 bg-blue-50">
      <div className="mt-20 flex min-h-[300px] flex-col items-center gap-5">
        <div className="flex gap-5">
          {[60, 90, 120].map((time) => (
            <button
              key={time}
              className={`rounded-md px-5 py-2 ${
                timeRange === time ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setTimeRange(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="flex gap-10">
          <div className="flex min-w-28 flex-col items-center">
            <div>занято</div>
            {bookings.length > 0 && (
              <div className="flex flex-col">
                {bookings
                  .sort(
                    (a, b) => timeToMinutes(a.start) - timeToMinutes(b.start),
                  )
                  .map((slot) => (
                    // <div key={booking.start} className="text-red-500">
                    //   {booking.start} - {booking.end}
                    // </div>
                    <div
                      className={cn(
                        "cursor-pointer",
                        bookings.some((b) => b.start === slot.start) &&
                          "bg-red-200",
                      )}
                      key={slot.start}
                      onClick={() =>
                        setBookings(
                          bookings.some((b) => b.start === slot.start)
                            ? bookings.filter((b) => b.start !== slot.start)
                            : [...bookings, slot],
                        )
                      }
                    >
                      {slot.start} - {slot.end}
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="flex min-w-28 flex-col items-center">
            <div>свободно</div>
            {timeSlots.map((slot) => (
              // <div key={slot.start} className="text-green-800">
              //   {slot.start} - {slot.end}
              // </div>
              <div
                className={cn(
                  "cursor-pointer",
                  bookings.some((b) => b.start === slot.start) && "bg-red-200",
                )}
                key={slot.start}
                onClick={() =>
                  setBookings(
                    bookings.some((b) => b.start === slot.start)
                      ? bookings.filter((b) => b.start !== slot.start)
                      : [...bookings, slot],
                  )
                }
              >
                {slot.start} - {slot.end}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-14">
        <div>
          {ideal60.map((slot) => (
            <div
              className={cn(
                "cursor-pointer",
                bookings.some((b) => b.start === slot.start) && "bg-red-200",
              )} //"cursor-pointer"}
              key={slot.start}
              onClick={() =>
                setBookings(
                  bookings.some((b) => b.start === slot.start)
                    ? bookings.filter((b) => b.start !== slot.start)
                    : [...bookings, slot],
                )
              }
            >
              {slot.start} - {slot.end}
            </div>
          ))}
        </div>
        <div>
          {ideal90.map((slot) => (
            <div
              className={cn(
                "cursor-pointer",
                bookings.some((b) => b.start === slot.start) && "bg-red-200",
              )}
              key={slot.start}
              onClick={() =>
                setBookings(
                  bookings.some((b) => b.start === slot.start)
                    ? bookings.filter((b) => b.start !== slot.start)
                    : [...bookings, slot],
                )
              }
            >
              {slot.start} - {slot.end}
            </div>
          ))}
        </div>
        <div>
          {ideal120.map((slot) => (
            <div
              className={cn(
                "cursor-pointer",
                bookings.some((b) => b.start === slot.start) && "bg-red-200",
              )}
              key={slot.start}
              onClick={() =>
                setBookings(
                  bookings.some((b) => b.start === slot.start)
                    ? bookings.filter((b) => b.start !== slot.start)
                    : [...bookings, slot],
                )
              }
            >
              {slot.start} - {slot.end}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

// [
//     { "start": "09:00", "end": "10:30" },
//     { "start": "10:45", "end": "12:15" },
//     { "start": "12:30", "end": "14:00" },
//     { "start": "14:15", "end": "15:45" },
//     { "start": "16:00", "end": "17:30" },
//     { "start": "17:45", "end": "19:15" }
//   ]

// [
//   { start: "09:00", end: "10:00" },
//   { start: "10:15", end: "11:15" },
//   { start: "11:30", end: "12:30" },
//   { start: "12:45", end: "13:45" },
//   { start: "14:00", end: "15:00" },
//   { start: "15:15", end: "16:15" },
//   { start: "16:30", end: "17:30" },
//   { start: "17:45", end: "18:45" },
//   { start: "19:00", end: "20:00" },
// ]

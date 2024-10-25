// import { useOrders } from "@/app/_store/orders"
// import { OrderType } from "@/app/_types/Types"
// import { createUserClient } from "@/utils/supabase/client"
// const supabase = createUserClient()
// const { addOrder, deleteOrder, updateOrder } = useOrders()
// const channels = supabase
//   .channel("custom-all-channel")
//   .on(
//     "postgres_changes",
//     { event: "*", schema: "public", table: "orders" },
//     (payload: any) => {
//       const { new: newRec, old } = payload
//       const order = { ...newRec, items: JSON.stringify(newRec.items) }

//       if (payload.eventType == "INSERT") {
//         addOrder(order as OrderType)
//       }
//       if (payload.eventType == "DELETE") {
//         deleteOrder(old.id)
//       }
//       if (payload.eventType == "UPDATE") {
//         updateOrder(old.id, order as OrderType)
//       }
//     },
//   )
//   .subscribe()

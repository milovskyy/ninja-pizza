// import { cn } from "@/lib/utils"
// import { Button } from "./ui/button"
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
// import { getHitDrinks } from "@/lib/data-service"
// import { CarouselOfProducts } from "./CarouselOfProducts"

// type Props = {}

// export const AddSomeDrinks = async ({}: Props) => {
//   const drinks = await getHitDrinks()

//   return (
//     <div className={cn("my-6 flex flex-col")}>
//       <div className="flex items-center justify-between">
//         <h2 className="text-[32px] font-bold">Add some drinks</h2>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             className="font-bold hover:border-primary hover:bg-primary"
//           >
//             See all
//           </Button>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               // onClick={() => api?.scrollTo(current - 1)}
//               className="h-12 w-12 p-0 hover:border-primary hover:bg-primary"
//             >
//               <IoIosArrowBack className="text-stone-500" />
//             </Button>
//             <Button
//               variant="outline"
//               // onClick={() => api?.scrollTo(current + 1)}
//               className="h-12 w-12 p-0 hover:border-primary hover:bg-primary"
//             >
//               <IoIosArrowForward className="text-stone-500" />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <CarouselOfProducts drinks={drinks} />
//     </div>
//   )
// }

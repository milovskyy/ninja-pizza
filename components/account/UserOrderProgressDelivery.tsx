import { cn } from "@/utils/utils"

type Props = {
  status: string
}

export const UserOrderProgressDelivery = ({ status }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 sm:grid-cols-[1fr_2fr_2fr_1fr] xl:grid-cols-[1fr_3fr_3fr_1fr]",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="flex-1"></div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main font-semibold">
            1
          </div>
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main":
                status === "Confirmed" ||
                status === "Shipped" ||
                status === "Delivered",
            })}
          ></div>
        </div>
        <div className={cn("font-semibold max-xs:text-sm")}>Order received</div>
      </div>
      {/* /////////////////////////// */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main":
                status === "Confirmed" ||
                status === "Shipped" ||
                status === "Delivered",
            })}
          ></div>
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 font-semibold",
              {
                "bg-main":
                  status === "Confirmed" ||
                  status === "Shipped" ||
                  status === "Delivered",
              },
            )}
          >
            2
          </div>
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main": status === "Shipped" || status === "Delivered",
            })}
          ></div>
        </div>
        <div
          className={cn("text-stone-400 max-xs:text-sm", {
            "font-semibold text-stone-950":
              status === "Confirmed" ||
              status === "Shipped" ||
              status === "Delivered",
          })}
        >
          Order is being prepared
        </div>
      </div>
      {/*  /////////////////////////*/}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main": status === "Shipped" || status === "Delivered",
            })}
          ></div>
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 font-semibold",
              {
                "bg-main": status === "Shipped" || status === "Delivered",
              },
            )}
          >
            3
          </div>
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main": status === "Delivered",
            })}
          ></div>
        </div>
        <div
          className={cn("text-stone-400 max-xs:text-sm", {
            "font-semibold text-stone-950":
              status === "Shipped" || status === "Delivered",
          })}
        >
          Courier is on the way
        </div>
      </div>
      {/*  /////////////////////////*/}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <div
            className={cn("h-1 w-full flex-1 bg-stone-100", {
              "bg-main": status === "Delivered",
            })}
          ></div>
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 font-semibold",
              {
                "bg-main": status === "Delivered",
              },
            )}
          >
            4
          </div>
          <div className="flex-1"></div>
        </div>
        <div
          className={cn("text-stone-400 max-xs:text-sm", {
            "font-semibold text-stone-950": status === "Delivered",
          })}
        >
          Order delivered
        </div>
      </div>
    </div>
  )
}

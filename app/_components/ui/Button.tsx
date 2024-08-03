import { cn } from "@/lib/utils"

// type PropsType = {
//   children: string
//   color?: string
//   className?: string
// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      // className={twMerge(
      //   `flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] cursor-pointer items-center justify-center rounded-full px-6 py-2 text-center text-[14px] text-stone-900`,
      //   color ? `${color}` : "bgmain",
      //   className && `${className}`,
      // )}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-full bg-[#ffc700] px-6 py-2 text-center text-[14px] text-stone-900",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

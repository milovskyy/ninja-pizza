import { twMerge } from "tailwind-merge"

type PropsType = {
  children: string
  color?: string
  styles: string
}

function Button({ children, color, styles }: PropsType) {
  return (
    <div
      className={twMerge(
        `flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] cursor-pointer items-center justify-center rounded-full px-6 py-2 text-center text-[14px] text-stone-900 ${styles}`,
        color ? `${color}` : "bgmain",
      )}
    >
      {children}
    </div>
  )
}

export default Button

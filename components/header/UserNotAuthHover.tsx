import { SignInModal } from "../SignInModal"

type TypeProps = {
  children: string
}

export type AuthType = {
  phone: string
  password: string
}

export const UserNotAuthHover = ({ children }: TypeProps) => {
  return (
    <div className="absolute right-0 top-[55px] hidden w-[300px] overflow-hidden pt-5 text-center group-hover:flex">
      <div className="flex w-full flex-col gap-1 rounded-3xl bg-white px-6 pb-4 pt-8">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <h2 className="mb-3 text-sm font-semibold text-stone-400">
          {children}
        </h2>
        <SignInModal buttonText="Sign in" />
      </div>
    </div>
  )
}

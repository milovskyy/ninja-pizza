import { cn } from "@/utils/utils"
import { SignInModal } from "../SignInModal"

type Props = {}

export const FormGoLogin = ({}: Props) => {
  return (
    <div>
      <h3 className="mb-3 text-sm tracking-wide text-stone-400">
        Log in to auto-fill your information for a faster pizza delivery!
      </h3>
      <SignInModal buttonText="Sign in with your phone number" />
    </div>
  )
}

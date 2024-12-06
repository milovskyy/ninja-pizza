import useModalStore from "@/app/_store/login-modal"
import { Button } from "../ui/button"

type Props = {}

export const FormGoLogin = ({}: Props) => {
  const { setShowModal } = useModalStore()
  return (
    <div>
      <h3 className="mb-3 text-sm tracking-wide text-stone-400">
        Log in to auto-fill your information for a faster pizza delivery!
      </h3>
      <Button
        className="w-full rounded-full bg-primary p-2 text-[16px] font-black hover:bg-main lg:p-3"
        onClick={() => setShowModal(true)}
      >
        Sign in with your phone number
      </Button>
    </div>
  )
}

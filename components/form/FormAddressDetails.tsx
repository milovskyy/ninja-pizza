import { FormInput } from "./FormInput"

type Props = {}

export const FormAddressDetails = ({}: Props) => {
  return (
    <>
      <FormInput label="Street" name="street" required max={40} />
      <div className="flex w-full gap-2">
        <FormInput
          label="Building"
          required
          name="building"
          type="number"
          max={5}
        />
        <FormInput label="Entrance" name="entrance" type="number" max={2} />
        <FormInput label="Floor" name="floor" type="number" max={2} />
        <FormInput label="Apt" name="apt" type="number" max={4} />
      </div>
    </>
  )
}

import { FormInput } from "./FormInput"
import { FormBlock } from "./FormBlock"

type Props = {}

export const FormPersonalDetails = ({}: Props) => {
  return (
    <FormBlock
      title="Personal details"
      className="grid grid-cols-2 gap-3 sm:grid-cols-[3fr_2fr] sm:gap-5"
    >
      <FormInput
        label="Name"
        name="name"
        required
        placeholder="Ninja"
        max={17}
      />
      <FormInput
        type="number"
        label="Phone"
        name="phone"
        required
        placeholder="0673442244"
        max={10}
      />
    </FormBlock>
  )
}

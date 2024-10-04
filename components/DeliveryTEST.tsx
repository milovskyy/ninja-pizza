import { useForm, Controller } from "react-hook-form"
import { Checkbox } from "./ui/checkbox"

const MyComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-3"
    >
      <input type="checkbox" {...register("isAgreed")} className="bg-primary" />
      <Checkbox {...register("gogo")} />
      {/* <div>
        <Controller
          control={control}
          name="isAgreed"
          render={({ field }) => (
            <Checkbox
              {...field} // Передача всех свойств, включая checked
              className="cursor-pointer"
            >
              Согласен с правилами
            </Checkbox>
          )}
        />
      </div>
      {errors.isAgreed && (
        <p className="text-red-500">Пожалуйста, подтвердите согласие.</p>
      )} */}
      <button type="submit">Submit</button>
    </form>
  )
}

export default MyComponent

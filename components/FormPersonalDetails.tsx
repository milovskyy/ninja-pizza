import { FormInput } from "./form/FormInput"
import { FormBlock } from "./FormBlock"

type Props = {}

export const FormPersonalDetails = ({}: Props) => {
  return (
    <FormBlock
      title="Personal details"
      className="grid grid-cols-[3fr_2fr] gap-5"
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
    // <div className="flex flex-col gap-3">
    //   <h2 className="text-xl font-bold">Personal details</h2>
    //   <div className="grid grid-cols-[3fr_2fr] justify-between gap-5 border border-stone-200 px-5 py-5">
    //     {/* <div className="">
    //         <p className="text-sm text-stone-400">
    //           Name <span className="text-primary">*</span>
    //         </p>

    //         <input
    //           className={cn(
    //             "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider",
    //             errors?.name && "border-red-300",
    //           )}
    //           type="text"
    //           placeholder="Ninja"
    //           {...register("name", {
    //             required: {
    //               value: true,
    //               message: "Please enter your name",
    //             },

    //             onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    //               const value = e.target.value.slice(0, 17)
    //               e.target.value = value
    //             },
    //           })}
    //         />
    //       </div> */}
    //     {/* <FormField
    //       control={control}
    //       name="name"
    //       render={({ field }) => (
    //         <FormItem className="w-full">
    //           <FormLabel className="text-sm font-normal text-stone-400">
    //             Name <span className="text-primary">*</span>
    //           </FormLabel>
    //           <FormControl>
    //             <Input
    //               placeholder="Ninja"
    //               className={cn(
    //                 "mt-2 flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 text-base font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider",
    //                 errors?.name && "border-red-300",
    //               )}
    //               {...field}
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     /> */}
    //     {/* <FormField
    //       control={control}
    //       name="phone"
    //       render={({ field }) => (
    //         <FormItem className="w-full">
    //           <FormLabel className="text-sm font-normal text-stone-400">
    //             Phone <span className="text-primary">*</span>
    //           </FormLabel>
    //           <FormControl>
    //             <Input
    //               placeholder="0673442244"
    //               className={cn(
    //                 "mt-2 flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 text-base font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider",
    //                 errors?.phone && "border-red-300",
    //               )}
    //               {...field}
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     /> */}
    //     {/* <div className="w-full">
    //       <input
    //         className={cn(
    //           "mt-2 flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider",
    //           errors?.phone && "border-red-300",
    //         )}
    //         type="tel"
    //         placeholder="0673442244"
    //         {...register("phone", {
    //           required: {
    //             value: true,
    //             message: "Phone number is required",
    //           },
    //           minLength: {
    //             value: 10,
    //             message: "Make sure your phone number has at least 10 digits",
    //           },
    //           onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    //             const value = e.target.value.replace(/[^0-9]/g, "")
    //             const formattedValue = value.slice(0, 10)
    //             e.target.value = formattedValue
    //           },
    //         })}
    //       />
    //     </div> */}
    //   </div>
    // </div>
  )
}

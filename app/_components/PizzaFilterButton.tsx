import Image from "next/image"

type PropsType = {
  handleFilter: (filter: string) => void
  selectedFilter: string
  name: string
}

function PizzaFilterButton({ handleFilter, selectedFilter, name }: PropsType) {
  return (
    <div
      className="flex cursor-pointer gap-2 p-2"
      onClick={() => handleFilter(name)}
    >
      <div
        className={`${selectedFilter === name ? "border-main" : "border-stone-200"} flex h-6 w-6 items-center justify-center rounded-full border-2`}
      >
        <div
          className={`h-[14px] w-[14px] rounded-full ${selectedFilter === name ? "bg-main" : "bg-transparent"}`}
        />
      </div>
      <Image
        src={`https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/${name}.png`}
        alt=""
        width={24}
        height={24}
      />
      <p className="font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  )
}

export default PizzaFilterButton

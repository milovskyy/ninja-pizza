import Image from "next/image"

type PropsType = {
  handleFilter: (filter: string) => void
  selectedFilter: string
  name: string
}

function PizzaFilterButton({ handleFilter, selectedFilter, name }: PropsType) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 p-2 max-xs:p-1"
      onClick={() => handleFilter(name)}
    >
      <div
        className={`${selectedFilter === name ? "border-primary" : "border-stone-200"} flex h-6 w-6 items-center justify-center rounded-full border-2`}
      >
        <div
          className={`h-[14px] w-[14px] rounded-full ${selectedFilter === name ? "bg-primary" : "bg-transparent"}`}
        />
      </div>
      <Image
        src={`https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/${name}.png`}
        alt=""
        width={24}
        height={24}
      />
      <p className="font-semibold max-xs:text-sm">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  )
}

export default PizzaFilterButton

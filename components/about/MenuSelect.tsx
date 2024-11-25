import MenuCategories from "../MenuCategories"

function MenuSelect() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="mb-5 px-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        Go to your favorite category and place an order
      </h1>
      <p className="mb-5 px-3 font-semibold text-stone-700 max-lg:text-center">
        A big variety of different dishes, among which there is something that
        you will like
      </p>
      <MenuCategories separate={true} />
    </div>
  )
}

export default MenuSelect

import MenuCategories from "../MenuCategories"

function MenuSelect() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">
        Go to your favorite category and place an order
      </h1>
      <p className="mb-4 font-semibold">
        A big variety of different dishes, among which there is something that
        you will like
      </p>
      <MenuCategories separate={true} />
    </div>
  )
}

export default MenuSelect

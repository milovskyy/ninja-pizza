import MenuCard from "./MenuCard"

// сделать потом ограничение на 8 штук максиму для отображения.

function MainMenuCategory() {
  return (
    <div className="flex flex-col items-center bg-blue-100 pt-12">
      <h1 className="text-center text-5xl font-bold">Pizza</h1>
      <div className="mt-9 grid w-full grid-cols-4 gap-[6px]">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  )
}

export default MainMenuCategory

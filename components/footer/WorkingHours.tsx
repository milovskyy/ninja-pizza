import SocialMediaBlock from "./SocialMediaBlock"

function WorkingHours() {
  return (
    <div className="flex justify-between gap-4 md:w-40 md:flex-col">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-stone-400">Working hours:</p>
        <p className="mb-10 font-semibold text-stone-800 max-lg:text-sm md:px-1">
          from 11:00 to 22:30
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-stone-400">
          Find us on social media:
        </p>

        <SocialMediaBlock />
      </div>
    </div>
  )
}

export default WorkingHours

import SocialMediaBlock from "./SocialMediaBlock"

function WorkingHours() {
  return (
    <div className="flex flex-col gap-4">
      <p className="px-2 text-sm text-stone-400">Working hours:</p>
      <p className="mb-10 px-2 font-semibold text-stone-800">
        from 11:00 to 22:30
      </p>
      <p className="px-2 text-sm text-stone-400">Find us on social media:</p>

      <SocialMediaBlock />
    </div>
  )
}

export default WorkingHours

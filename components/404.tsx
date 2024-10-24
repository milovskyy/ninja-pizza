import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export const Error = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-white py-14">
      <Image
        src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/404.svg"
        alt="404"
        width={400}
        height={200}
      />
      <h1 className="text-3xl font-black">Something went wrong</h1>
      <h3 className="text-xl font-black">
        {"This page could not be found :("}
      </h3>
      <Link
        href="/"
        className="bg-accent-500 text-primary-800 inline-block px-6 py-3 text-lg"
      >
        <Button>Go back home</Button>
      </Link>
    </div>
  )
}

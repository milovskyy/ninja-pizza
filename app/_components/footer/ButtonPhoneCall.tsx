"use client"

type PropsType = {
  number: string
}

function ButtonPhoneCall({ number }: PropsType) {
  return (
    <div className="inline-flex">
      <div className="hover:text-main inline-flex cursor-pointer px-2 font-semibold text-stone-800">
        {number}
      </div>
    </div>
  )
}

export default ButtonPhoneCall

type PropsType = {
  params: { product: string }
}

export default function Page({ params }: PropsType) {
  // console.log(params)
  const { product } = params
  return <div>{product}</div>
}

export const initialSort = (products) => {
  const productsByCategories = products.reduce((acc, curr) => {
    const category = curr.category

    if (!acc[category]) {
      acc[category] = { name: curr.category, products: [] }
    }
    acc[category].products.push(curr)
    return acc
  }, [])

  // const productsByCategories = {
  //   Pizza: { name: "Pizza", products: [] },
  //   Snacks: { name: "Snacks", products: [] },
  //   Desserts: { name: "Desserts", products: [] },
  //   Drinks: { name: "Drinks", products: [] },
  //   Extras: { name: "Extras", products: [] },
  // }

  // products.forEach((element) => {
  //   const category = element.category
  //   productsByCategories[category].products.push(element)
  //   // console.log(productsByCategories[category].products)
  // })

  const result = Object.values(productsByCategories)

  return result
}

// const result = values.sort((a, b) => {
//   if (a.name === "Pizza" && b.name !== "Pizza") {
//     return -1
//   } else if (a.name !== "Pizza" && b.name === "Pizza") {
//     return 1
//   } else {
//     return 0
//   }
// })

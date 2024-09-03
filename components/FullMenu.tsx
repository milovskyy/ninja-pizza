import { PRODUCTLIMIT } from "@/app/_constants/constants"
import MenuCategory from "./MenuCategory"
import { getProducts } from "@/lib/data-service"
import { groupProductsByCategory } from "@/lib/helperFunction"

export const revalidate = 0

async function FullMenu() {
  const products = await getProducts()

  const data = groupProductsByCategory(products)

  const filteredProducts = data?.filter((obj) => obj.name !== "Extras")

  console.log(products)

  if (!products || !filteredProducts) return null

  return (
    <div className="mb-16 flex flex-col">
      {filteredProducts.map((category) => (
        <MenuCategory
          key={category.name}
          products={category.products.slice(0, PRODUCTLIMIT)}
          name={category.name}
          limit={PRODUCTLIMIT}
        />
      ))}
    </div>
  )
}

export default FullMenu

// 'Pizza with pear and gorgonzola',
// 'Pizza with cotto and truffle sauce',
// 'Tom Yam Pizza',
// 'Margherita Pizza',
// 'Pizza with cotto and pineapple',
// 'Asian pizza with duck',
// 'Fruti di Mare Pizza',
// 'Double Pepperoni',
// 'Pizza with mussels and octopus',
// 'Neapolitana',
// 'Pizza with eel and ricotta',
// 'Margherita Bianca with sun-dried tomatoes',
// 'Pizza Carbonara',
// 'Pizza with veal and artichokes',
// 'Country style pizza with bacon',
// 'Pizza with salami and veal',
// 'Pizza with spicy sujuk and
// ricotta',
// 'Pizza with Prosciutto di Parma',
// 'Pizza with duck in teriyaki sauce',
// 'Pizza with pancetta and mushrooms',
// 'Veal Pizza with Worcestershire Sauce',
// 'Sausage Pizza with cheddar
// flambe',
// 'Sweet Chilli Chicken & Pineapple Pizza',
// 'Quattro Formaggi Pizza with Onion Marmalade',
// 'Sweet Chili Meat Pizza',
// 'Pepperoni Pizza Light',
// 'Cheeseburger Pizza',
// 'Prawn & Sweet Chilli Pizza',
// 'Veal Pizza with BBQ Sauce',  'Pepperoni Pizza with Hot Honey'

// 'Fanta Berry',
//   'Fanta Strawberry',
//   'Fanta Peach',
//   'Fanta Pineapple',
//   'Vanilla Cola 0.33',
//   'Cherry Vanilla Cola 0.355',  'Hoegaarden White',
//   'Corona Extra',
//   'Prosecco Millesimato Rose,
// Canti',
//   'Sauvignon Blanc, Marlborough Sun',
//   'Cava Jaume Serra Brut, J.Garcia Carrion',
//   'Sauvignon Blanc, Marlborough Sun 750ml',
//   "Rose d'Anjou, Chatelain Desjacques",
//   'Curiosity Cola Fentimans',
//   'Rose Fentimans Lemonade',
//   'Pinot Grigio Pavia Blanc, Canti',
//   'Valpolicella Superiore Ripasso Marogne, Zeni',
//   'Sauvignon Winkl, Cantina Terlano',
//   'Coca-Cola Zero',
//   'Coca-Cola 0.5',
//   'Dr Pepper Cherry',
//   'Dr Pepper',
//   'Fanta Orange',
//   'Sprite',
//   'Morshynska Still Water',
//   'Morshynska Mineral Water'

// 'Pickled jalapeno', 'Tartar
// sauce', 'Tasty sauce'
// 'Syrniki with cream',
// 'Churros with ice cream sauce',
// 'Churros with maple syrup'

// 'Panini with shrimp and jalapenos',
// 'Panini with chicken sausages and pancetta',
// 'Chicken wings in sweet and
// sour sauce',
// 'Sweet potato fries with sesame sauce',
// 'Salzburg chicken sausages',  'BBQ chicken wings',
// 'Cheese sticks',
// 'Chicken wings Black Pepper',
// 'Cotto panini',
// 'Hawaiian chicken panini',
// 'Potato dips',
// 'Potato dips with truffle'

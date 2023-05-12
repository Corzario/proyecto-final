import loader from "./componet/loader.js"
import showMenu from "./componet/showMenu.js"
import showCart from "./componet/showCart.js"
import products from "./componet/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./componet/cart.js"

/* UI Elements */ 

/*ocualtar loader */
loader()

/* Mostrar menu */
showMenu()

/* Mostrar carrito */
showCart()

/*  End UI Elements */

/* products */
const { db, printProducts} = products(await getProducts())

/* carrito */
cart(db, printProducts)


import express from "express";
import ProductManager from "../controlers/ProductManager.js";
import cartModel from "../controlers/CartManager.js";

const ViewsRouter = express.Router()
const product = new ProductManager()
const cart = new cartModel()

//Rutas GET para la página de inicio y detalles del producto:

ViewsRouter.get("/products", async (req, res) => {
    let allProducts = await product.getProducts()
    allProducts = allProducts.map(product => product.toJSON())
    res.render("home", {
        title: "Segunda Pre Entrega",
        products: allProducts
    })
})

ViewsRouter.get("/products/:id", async (req, res) => {

    let productId = req.params.id
    let prod = await product.getProductById(productId)

    const productDetail = prod.toObject();

    res.render("prod", {
        title: "Detalle de Producto",
        product: productDetail
    })
})

ViewsRouter.get("/carts/:cid", async (req, res) => {
    let cartId = req.params.cid
    let products = await cart.getProductsInCart(cartId)
    let productObjet = products.toObject()
    res.render("carts", {
        title: "Carrito",
        cart: productObjet
    })
})

export default ViewsRouter
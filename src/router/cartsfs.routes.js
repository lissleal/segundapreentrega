//Archivo usado para trabajar con fileSystem
import { Router } from "express";
import CartManager from "../controlers/CartManager.js";

const CartFsRouter = Router()
const carts = new CartManager

CartFsRouter.post("/", async (req, res) => {
    res.send(await carts.addCart())
})
CartFsRouter.get("/", async (req, res) => {
    res.send(await carts.readCarts())
})
CartFsRouter.get("/:cid", async (req, res) => {
    let id = parseInt(req.params.cid)
    res.send(await carts.getCartsById(id))
})
CartFsRouter.post("/:cid/product/:pid", async (req, res) => {
    let cartId = parseInt(req.params.cid)
    let productId = parseInt(req.params.pid)
    res.send(await carts.addProductInCart(cartId,productId))
})

export default CartFsRouter
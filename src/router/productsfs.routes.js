//Archivo usado para trabajar con fileSystem

import { Router } from "express";
import ProductManager from "../controlers/ProductManager.js";

const ProductFsRouter = Router()
const product = new ProductManager();

ProductFsRouter.get("/", async (req, res) => {
    let limit = parseInt(req.query.limit)
    res.send(await product.getProducts(limit))
})

ProductFsRouter.get("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid)
    res.send(await product.getProductsById(id))
})

ProductFsRouter.post("/", async (req, res) => {
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))
})

ProductFsRouter.put("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid)
    let updateProduct = req.body
    res.send(await product.updateProducts(id, updateProduct))
})

ProductFsRouter.delete("/:pid", async (req,res) => {
    let id = parseInt(req.params.pid)
    res.send(await product.deleteProducts(id))
})

export default ProductFsRouter
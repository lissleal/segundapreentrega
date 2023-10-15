import express from "express";
import { engine } from "express-handlebars";
import * as path from "path"
import __dirname from "./utils.js";
import ViewsRouter from "./router/views.routes.js";


//Mongoose
import mongoose from "mongoose";
import cartsRouter from "./router/carts.routes.js";
import productsRouter from "./router/products.routes.js";


//Creación de la aplicación Express y servidor HTTP:
const app = express()
const PORT = 8080;
app.listen(PORT, () => console.log(`Escuchando servidor en puerto ${PORT}`))

//Conexión a MongoDB:
mongoose.set('strictQuery', false); //Para que no de error deprecated al buscar por query
mongoose.connect("mongodb+srv://lissett777:7b9DvuamjK0qhB8l@pruebacoder.uzvytlv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", (error) => {
    if (error) {
        console.log("Error connecting to database: ", error);
        process.exit();
    }
    console.log("Connected to database");
})


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Estructura handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))

//Configuración de rutas estáticas y de vistas:
app.use("/", express.static(__dirname + "/public"))

//Rutas para vistas:
app.use("/", ViewsRouter)

//Rutas para CRUD:
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)










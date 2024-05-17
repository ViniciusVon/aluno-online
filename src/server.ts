import 'reflect-metadata'
import "dotenv/config"

import express from "express"
import router from "./routes"
import { errorHandlerMiddleware } from './middlewares'

const app = express()

app.use(express.json())
app.use(router)
//app.use((err, req, res, next) => console.log("Entrou"))
//app.use(errorHandlerMiddleware)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
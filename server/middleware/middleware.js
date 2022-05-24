import express from "express"
import { router } from "../routes/routes.js"
function middleware (app) {

app.use(express.json())
app.use(router)

}

export { middleware }
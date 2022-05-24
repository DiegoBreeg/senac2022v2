import express from "express";
import {middleware} from "./middleware/middleware.js"

const app = express()

middleware(app)

app.listen(3000, console.log("[server] online!"))
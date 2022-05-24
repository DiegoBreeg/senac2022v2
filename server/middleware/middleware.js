import express from "express"
import { router } from "../routes/routes.js"
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
function middleware (app) {

app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../", "view/public")))
app.use(router)

}

export { middleware }
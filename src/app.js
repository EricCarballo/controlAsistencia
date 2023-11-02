import express from "express";
import config from "./config";

import empleadosRoutes from './routes/empleadosRoutes.routes'

const app = express();

// SETTINGS
app.set('port', config.port)

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(empleadosRoutes)

export default app;
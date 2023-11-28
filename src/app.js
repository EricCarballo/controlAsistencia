import express from "express";
import config from "./config";
import cors from "cors"

import empleadosRoutes from './routes/routes'

const app = express();

// SETTINGS
app.set('port', config.port)

// MIDDLEWARES
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(empleadosRoutes);

export default app;
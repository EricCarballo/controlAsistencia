import {Router} from 'express'

import {getEmpleados, createEmpleado, getEmpleadoById, deleteEmpleado, updateEmpleado} from '../controllers/empleados.controller'
import { login } from '../controllers/login.controller'
import { addRegistro, delelteRegistro, getRegistroById, getRegistros, registrarSalida, updateRegistro } from '../controllers/registros.controlle'

const router = Router()

router.get('/empleados',                getEmpleados)
router.post('/empleados',               createEmpleado)
router.get('/empleados/:id',            getEmpleadoById)
router.put('/empleados/:id',            updateEmpleado)
router.delete('/empleados/:id',         deleteEmpleado);

router.post('/login',                   login);

router.get('/registros',                getRegistros);
router.get('/registros/:id',            getRegistroById);
router.post('/registros',               addRegistro);
router.put('/registros/',               updateRegistro);
router.put('/registros/:id',            registrarSalida);
router.delete('/registros/:id',         delelteRegistro);

export default router
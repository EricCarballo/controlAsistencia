import {Router} from 'express'

import {getEmpleados, createEmpleado, getEmpleadoById, deleteEmpleado, updateEmpleado} from '../controllers/empleados.controller'

const router = Router()

router.get('/empleados',                getEmpleados)
router.post('/empleados',               createEmpleado)
router.get('/empleados/:id',            getEmpleadoById)
router.put('/empleados/:id',            updateEmpleado)
router.delete('/empleados/:id',         deleteEmpleado);

export default router
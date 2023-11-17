import { v4 as uuidv4 } from 'uuid'; 
import {getConection, sql } from '../db/conection'
import { q } from '../db/querys';
import { encrypt, compare } from '../encrypt/ePassword'


export const getEmpleados = async (req, res) => {
    try {
        
        const conexion = await getConection();
        const result = await conexion.request().query(q.getAllEmppleados);
        res.json(result.recordsets);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createEmpleado = async (req, res) => {

    const { nombreEmpleado, puesto, sueldo, correo, celular, usuario, password, isAdmin } = req.body;

    const passwordHash = await encrypt(password)

    if (nombreEmpleado == null || sueldo == null || puesto == null || correo == null || celular == null || usuario == null || password == null || isAdmin == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' });
    }

    const idEmpleado = uuidv4();

    try {
        const pool = await getConection();    
        await pool.request()
            .input('idEmpleado', sql.VarChar, idEmpleado)
            .input('nombreEmpleado', sql.VarChar, nombreEmpleado)
            .input('puesto', sql.VarChar, puesto)
            .input('sueldo', sql.Money, sueldo)
            .input('correo', sql.VarChar, correo)
            .input('celular', sql.VarChar, celular)
            .input('usuario', sql.VarChar, usuario)
            .input('password', sql.VarChar, passwordHash)
            .input('isAdmin', sql.Bit, isAdmin)
            .input('activo', sql.Bit, true)
            .query(q.addEmpleado);
        
        res.json('Nuevo empleado creado');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const getEmpleadoById = async ( req, res ) => {

    const { id } = req.params;

    const conexion = await getConection();
    const result = await conexion.request().input('idEmpleado', id).query(q.empleadoById);

    res.send(result.recordsets[0]);

}

export const updateEmpleado = async ( req, res ) => {

    const { nombreEmpleado, puesto, sueldo, correo, celular, usuario, password } = req.body;
    const { id } = req.params;

    if (nombreEmpleado == null || sueldo == null || puesto == null || correo == null || celular == null || usuario == null || password == null || isAdmin == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' });
    }
    
    const conexion = await getConection();
    await conexion.request()
    .input('nombreEmpleado', sql.VarChar, nombreEmpleado)
    .input('puesto', sql.VarChar, puesto)
    .input('sueldo', sql.Money, sueldo)
    .input('correo', sql.VarChar, correo)
    .input('celular', sql.VarChar, celular)
    .input('usuario', sql.VarChar, usuario)
    .input('password', sql.VarChar, password)
    .input('isAdmin', sql.Bit, isAdmin)
    .input('idEmpleado', sql.VarChar, id)
    .query(q.updateEmpleado)

    res.send('Usuario editado exitosamente')

}

export const deleteEmpleado = async (req, res) => {
    const { id } = req.params;

    const conexion = await getConection();
    await conexion.request()
        .input('idEmpleado', sql.VarChar, id)
        .query(q.deleteEmpleado);

    res.json('Empleado Eliminado');
};

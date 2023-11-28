import {getConection, sql } from '../db/conection'
import { q } from '../db/querys';


export const getRegistros = async ( req, res ) => {
    try {
        
        const conexion = await getConection();
        const result = await conexion.request().query(q.getRegistros);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getRegistroById = async ( req, res ) => {

    const { id } = req.params;

    const conexion = await getConection();
    const result = await conexion.request().input('idEmpleado', id).query(q.getRegistroById);

    console.log(result);

    res.send(result.recordsets[0]);
}

export const addRegistro = async (req, res) => {
    const { idEmpleado, nombreEmpleado, entrada, salida, fecha } = req.body;    

    try {
        const pool = await getConection();
        await pool.request()
            .input('idEmpleado', sql.VarChar, idEmpleado)
            .input('nombreEmpleado', sql.VarChar, nombreEmpleado)
            .input('entrada', sql.VarChar, entrada)
            .input('salida', sql.VarChar, salida)
            .input('fecha', sql.VarChar, fecha)
            .input('activo', sql.Bit, true)
        .query(q.addRegistro);

        res.json('Registro Exitoso ');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateRegistro = async ( req, res ) => {
    const { idEmpleado, nombreEmpleado, entrada, salida } = req.body;
    
    try {
        const conexion = await getConection();
        await conexion.request()
            .input('idEmpleado', sql.VarChar, idEmpleado)
            .input('nombreEmpleado', sql.VarChar, nombreEmpleado)
            .input('entrada', sql.VarChar, entrada)
            .input('salida', sql.VarChar, salida)
            .input('activo', sql.Bit, true)
        .query(q.updateRegistro);
    
        res.send('Registro editado existosamente');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const registrarSalida = async ( req, res ) => {
    const { salida } = req.body;
    const { id } = req.params;
    console.log('id: ', id);
    try {
        const conexion = await getConection();
        await conexion.request()
            .input('idRegistros', sql.VarChar, id)
            .input('salida', sql.VarChar, salida)
        .query(q.registrarSalida);
    
        res.send('Registro editado existosamente');
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send(error.message);
    }

}; 

export const delelteRegistro = async ( req, res ) => {
    const { idEmpleado } = req.body; 

    try {
        const conexion = await getConection();
        await conexion.request()
            .input('idEmpleado', sql.VarChar, idEmpleado)
            .query(q.deleteRegistro)

        res.send('Registro eliminado con éxito')
    } catch (error) {
        
    }
};

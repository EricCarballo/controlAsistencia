import { getConection } from '../db/conection';
import { q } from '../db/querys';
import { compare } from '../encrypt/ePassword';

export const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const conexion = await getConection();
        const result = await conexion.request().query(q.getAllEmppleados);

        // Verificar si hay registros en la base de datos
        if (!result.recordsets || result.recordsets.length === 0 || result.recordsets[0].length === 0) {
            return res.json([]);
        }

        // Buscar al usuario por nombre de usuario
        const usuarioEncontrado = result.recordsets[0].find(user => user.usuario === usuario);

        // Verificar si se encontró el usuario
        if (!usuarioEncontrado) {
            return res.json([]);
        }

        try {
            // Comparar la contraseña ingresada con la almacenada en la base de datos
            const contrasenaCoincide = await compare(password, usuarioEncontrado.password);

            // Verificar si las contraseñas coinciden
            if (contrasenaCoincide) {
                return res.json(usuarioEncontrado);
            } else {
                // Si la contraseña no coincide con la db retorna un array vacío
                return res.json([]);
            }
        } catch (error) {
            return res.status(500).send(error.message);
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

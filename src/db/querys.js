

export const q = {
    // EMPLEADOS - USUARIOS
    getAllEmppleados: 'SELECT * FROM tblEmpleados WHERE activo = 1',
    addEmpleado: 'INSERT INTO tblEmpleados (idEmpleado, nombreEmpleado, puesto, sueldo, correo, celular, usuario, password, isAdmin, activo) VALUES (@idEmpleado, @nombreEmpleado, @puesto, @sueldo, @correo, @celular, @usuario, @password, @isAdmin, @activo)',
    empleadoById: 'SELECT * FROM tblEmpleados WHERE idEmpleado = @idEmpleado',
    deleteEmpleado: 'UPDATE tblEmpleados SET activo = 0  WHERE idEmpleado = @idEmpleado ',
    updateEmpleado: 'UPDATE tblEmpleados SET nombreEmpleado = @nombreEmpleado, puesto = @puesto, sueldo = @sueldo, correo = @correo, celular = @celular, usuario = @usuario, password = @password WHERE idEmpleado = @idEmpleado',

    // LOGIN
    login: 'SELECT * FROM tblEmpleado WHERE usuario = @usuario AND password = @password',

    // BITCÁCORA DE REGISTROS
    getRegistros: 'SELECT * FROM tblRegistros WHERE activo = 1 ORDER BY idRegistros DESC',
    getRegistroById: 'SELECT TOP 1 * FROM tblRegistros WHERE idEmpleado = @idEmpleado ORDER BY idRegistros DESC',
    addRegistro: 'INSERT INTO tblRegistros (idEmpleado, nombreEmpleado, entrada, salida, fecha, activo) VALUES (@idEmpleado, @nombreEmpleado, @entrada, @salida, @fecha, @activo)',
    updateRegistro: 'UPDATE tblRegistros SET salid = @salida, salida = @salida, fecha = @fecha activo = @activo',
    deleteRegistro: 'UPDATE tblRegistros SET activo = 0 WHERE idEmpleado = @idEmpleado',
    registrarSalida: 'UPDATE tblRegistros SET salida = @salida WHERE idRegistros = @idRegistros'
};


export const q = {
    getAllEmppleados: 'SELECT * FROM tblEmpleados WHERE activo = 1',
    addEmpleado: 'INSERT INTO tblEmpleados (idEmpleado, nombreEmpleado, puesto, sueldo, correo, celular, usuario, password, isAdmin, activo) VALUES (@idEmpleado, @nombreEmpleado, @puesto, @sueldo, @correo, @celular, @usuario, @password, @isAdmin, @activo)',
    empleadoById: 'SELECT * FROM tblEmpleados WHERE idEmpleado = @idEmpleado',
    deleteEmpleado: 'UPDATE tblEmpleados SET activo = 0  WHERE idEmpleado = @idEmpleado ',
    updateEmpleado: 'UPDATE tblEmpleados SET nombreEmpleado = @nombreEmpleado, puesto = @puesto, sueldo = @sueldo, correo = @correo, celular = @celular, usuario = @usuario, password = @password WHERE idEmpleado = @idEmpleado',
    login: 'SELECT * FROM tblEmpleado WHERE usuario = @usuario AND password = @password'
};
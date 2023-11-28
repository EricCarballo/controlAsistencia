import sql from 'mssql'
import config from '../config'

const dbSettings = {
    user:       config.dbUser,
    password:   config.dbPassword,
    server:     config.dbServer,
    database:   config.dbDataBase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
} 

export async function getConection(){

    try{
        const conexion = await sql.connect(dbSettings)
        return conexion;
    }catch(error){
        console.error(error)
    }

}

export {sql};
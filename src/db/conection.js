import sql from 'mssql'

const dbSettings = {
    user: 'admin',
    password: 'admin',
    server: 'localhost',
    database: 'controlAsistencia',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
} 

async function getConection(){

    try{
        const conexion = await sql.connect(dbSettings)
        return pool;
    }catch(error){
        console.error(error)
    }

}

getConection();
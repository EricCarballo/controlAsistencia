const bcrypt = require('bcryptjs')

export const encrypt = async ( txtPassword ) => {
    const hash = await bcrypt.hash(txtPassword, 10)
    return hash
}

export const compare = async ( txtPassword, ePassword ) => {
    return await bcrypt.compare( txtPassword, ePassword )
}
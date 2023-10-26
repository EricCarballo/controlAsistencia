import {config} from 'dotenv'
config()

console.log(process.env.NICKNAME)

export default {
    port: process.env.port || 2000
}
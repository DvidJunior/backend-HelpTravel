import dotenv from 'dotenv'
import {promisify} from 'util'
import mysql from 'mysql2'
dotenv.config()
const {HOST, USER_DATABASE, PASSWORD, NAME_DATABASE } = process.env

const database = {
    host: HOST,
    user: USER_DATABASE,
    password: PASSWORD,
    database: NAME_DATABASE
}

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
   if (err) {
     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
       console.log('DATABASE CONNECTION CLOSED')
     }
     if (err.code === 'ER_CON_COUNT_ERROR') {
       console.log('DATABASE HAS TO MANY CONNECTIONS')
     }
     if (err.code === 'ECONNREFUSED') {
       console.log('DATABASE CONNECTION WAS REFUSED')
     }
   }
 
   if (connection) {
     connection.release()
     console.log('DB is Connected')
   }
   return
 })
 
pool.query = promisify(pool.query)
export default pool
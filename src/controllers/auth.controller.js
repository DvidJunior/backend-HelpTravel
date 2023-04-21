import pool from '../db/database.js'
import { encryptPassword, comparePassword } from '../libs/encrypt.js'
import config from '../config.js'
import jwt from 'jsonwebtoken'
import { randomUUID } from 'crypto'

export const register = async (req, res) => {
    const {
        identification_number,
        name,
        last_name,
        birthdate,
        email,
        password,
        role
    } = req.body

    let roles = req.body.role

    if (!roles) {
        const role = await pool.query('SELECT * FROM roles WHERE name=?', ['Client'])
        roles = role[0].id
    }


    try {

        const encry = await encryptPassword(password)

        const user = {
            id: randomUUID(),
            identification_number,
            name,
            last_name,
            birthdate: new Date(),
            email,
            password: encry,
            profile_photo: '/photho',
            id_role: roles
        }

        console.log(user)
        
        await pool.query('INSERT INTO users SET ?', [user])

    
        const token = jwt.sign({ id: user.id }, config.SECRET_TOKENT, {
            expiresIn: 86400
        })

        res.status(200).json({ token })

    } catch (error) {
        return res.status(400).json({
            message: "error al crear ususario"
        })
    }
}
export const login = async (req, res) => {

    const { email, password } = req.body 

    try {

        const result = await pool.query('SELECT id FROM users WHERE email = ?', [email]) 
        if (result.length <= 0) return res.status(404).json({ message: 'ERROR USUARIO NO ES ENCONTRADO' }) 
        let id = result[0].id


        const rows = await pool.query('Select * from users Inner join roles On users.id_role = roles.id WHERE users.id = ?', [id])

        console.log(rows)
        const pass = await comparePassword(password, rows[0].password)// compara las password da la DB con las q ingreso y return un boolean

        
        if (!pass) return res.status(401).json({ message: 'ERROR CLAVE INCORRECTA' })// depende de que retorne aprueba o no la comparacion


        const token = jwt.sign({ id: id, name: result[0].name }, config.SECRET_TOKENT, {
            expiresIn: 86400
        })

    
        return res.status(200).json({ token })


    } catch (error) {
        return res.status(400).json({
            message: "error consulta Logueo"
        })
    }

}


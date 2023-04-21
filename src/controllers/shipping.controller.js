import pool from '../db/database.js'
import { encryptPassword, comparePassword } from '../libs/encrypt.js'
import config from '../config.js'
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import { randomUUID } from 'crypto'
import boxes from '../public/boxes.json'
import dotenv from 'dotenv'
import fetch from "node-fetch"
dotenv.config()
const { SESSION_TRACKER, APIKEY } = process.env

const regularExpression = (data) => {
  let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  return regex.exec(data)[0]
}
const generateQuote = async (req, res) => {

  const { destiny, weight, quantity, declaredValue, id_category } = req.body

  try {
    const token = req.headers.authorization
    const decoded = jwt_decode(token.split(' ')[1])

    const user = await pool.query('SELECT * FROM users WHERE id=?', [decoded.id])

    const shippingBox = boxes.filter(box => box.min_weight < weight && weight <= box.max_weight)

    console.log(shippingBox)
    let destinyLoc = regularExpression(destiny)


    const idLocationDestiny = await pool.query('SELECT * FROM locations WHERE locationName=?', destinyLoc)
    console.log(idLocationDestiny)

    const quote = {
      originLocationCode: "11001000",
      destinyLocationCode: idLocationDestiny[0].locationCode.toString(),
      height: shippingBox[0].height,
      width: shippingBox[0].width,
      length: shippingBox[0].length,
      weight: shippingBox[0].max_weight,
      quantity,
      declaredValue,
      saleValue: 250000
    }

    const response = await fetch('https://api-v2.dev.mpr.mipaquete.com/quoteShipping', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "session-tracker": SESSION_TRACKER,
        "apikey": APIKEY
      },
      body: JSON.stringify(quote)
    })

    const data = await response.json()

    return res.status(200).json({
      data
    })
  } catch (e) {
    console.log(e)
  }


}

module.exports = { generateQuote }

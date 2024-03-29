import {Router} from 'express'
import {generateQuote, sendShippingCart, getShippingCart, deleteItemCart, getCategorias, addShipping, getShipping} from '../controllers/shipping.controller.js'

const router = Router()

router.post('/quote', generateQuote)
router.get('/categori', getCategorias)
router.post('/send-Cart', sendShippingCart)
router.get('/get-Cart', getShippingCart)
router.delete('/deleteItemCart/:id', deleteItemCart)
router.post('/envio', addShipping)
router.get('/getEnvio', getShipping)

export default router
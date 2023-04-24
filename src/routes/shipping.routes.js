import {Router} from 'express'
import {generateQuote, sendShippingCart, getShippingCart, deleteItemCart} from '../controllers/shipping.controller.js'

const router = Router()

router.post('/quote', generateQuote)
router.post('/send-shipping-cart', sendShippingCart)
router.get('/get-shipping-cart', getShippingCart)
router.delete('/delete-item-cart/:id', deleteItemCart)

export default router
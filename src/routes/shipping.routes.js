import {Router} from 'express'
import {generateQuote} from '../controllers/shipping.controller.js'

const router = Router()

router.post('/quote', generateQuote)

export default router
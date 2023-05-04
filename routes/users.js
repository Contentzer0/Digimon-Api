import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()
router.get('/deck1/:userId', controllers.deck1)
router.put('/updateQuantity', controllers.changeQuantity)
router.post('/sign-up', controllers.signUp)
router.post('/addCard', controllers.addCard)
router.put('/deleteCard/:cardId', controllers.deleteUserCard)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.post('/change-password', controllers.changePassword)

export default router
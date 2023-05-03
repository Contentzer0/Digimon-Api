import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()
router.get('/deck1', controllers.deck1)
router.post('/sign-up', controllers.signUp)
router.post('/addCard', controllers.addCard)
router.post('/deleteCard', controllers.deleteCard)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.post('/change-password', controllers.changePassword)

export default router
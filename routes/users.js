import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()
router.get('/deck1', controllers.deck)
router.post('/sign-up', controllers.signUp)
router.post('/addDeck', controllers.addDeck)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.post('/change-password', controllers.changePassword)

export default router
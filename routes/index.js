import usersRoutes from './users.js'
import {Router} from "express"
import controller from "./card.js"
const router = Router()
// router.get("/", (req, res) => res.send("This is the api root!"))
router.use("/", controller)
router.use('/', usersRoutes)
export default router
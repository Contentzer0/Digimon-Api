import {Router} from "express"
import Cards from "../models/Structure.js"
const router = Router()
router.get("/", (req, res) => res.send("This is the api root!"))
router.use("/digimon", Cards)
export default router
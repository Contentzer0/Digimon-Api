
import {Router} from "express"
import digimon from "./card.js"
const router = Router()
// router.get("/", (req, res) => res.send("This is the api root!"))
router.use("/digimon", digimon)
export default router
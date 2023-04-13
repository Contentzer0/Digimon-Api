import {Router} from "express"
import * as controllers from "../controllers/cards.js"
const router = Router()
router.get("/", controllers.getCards)
router.get("/color/:color", controllers.getColor)
router.get("/name/:name", controllers.getName)
router.get("/cardnumber/:cardnumber", controllers.getCardNumber)
router.get("/level/:level", controllers.getLevel)
router.get("/playcost/:playcost", controllers.getPlayCost)
router.get("/dp/:dp", controllers.getDp)
router.get("/evolutioncost/:evolutioncost", controllers.getEvolutionCost)
router.post("/", controllers.getCard)
router.put("/:id", controllers.getCard)
router.delete("/:id", controllers.getCard)

export default router
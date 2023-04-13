import {Router} from "express"
import * as controllers from "../controllers/cards.js"
const router = Router()
router.get("/", controllers.getCards)
// router.get("/:name", controllers.getName)
router.get("/color/:color", controllers.getColor)
router.post("/", controllers.getCard)
router.put("/:id", controllers.getCard)
router.delete("/:id", controllers.getCard)

export default router
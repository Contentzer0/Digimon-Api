
import db from "../db/connection.js"
import Cards from "../models/Structure.js"

import black from "./black.json" assert {type: "json"}
import red from "./red.json" assert {type: "json"}
import yellow from "./yellow.json" assert {type: "json"}
import blue from "./blue.json" assert {type: "json"}
import green from "./green.json" assert {type: "json"}
import purple from "./purple.json" assert {type: "json"}

const insertData = async () => {
    //reset database
    await db.dropDatabase()

    await Cards.insertMany(black)
    await Cards.insertMany(red)
    await Cards.insertMany(yellow)
    await Cards.insertMany(blue)
    await Cards.insertMany(green)
    await Cards.insertMany(purple)

    db.close()
}
insertData()
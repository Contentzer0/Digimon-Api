import mongoose from "mongoose"
const Schema = mongoose.Schema
let Cards = new Schema({
    name: String,
    type: String,
    color: String,
    stage: String,
    digi_type: String,
    attribute: String,
    level: Number,
    play_cost: Number,
    evolution_cost: Number,
    cardrarity: String,
    dp: Number,
    cardnumber: String,
    maineffect: String,
    sourceeffect: String,
    set_name: String,
    image_url: String,
    quantity: Number
})
export default mongoose.model("cards", Cards)
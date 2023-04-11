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
    dp: Number,
    cardnumber: String,
    maineffect: String,
    sourceeffect: String,
    image_url: String
})
export default mongoose.model("cards", Cards)
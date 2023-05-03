import Cards from "./Structure.js"
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    deck1: {
      type: Array,
      ref: Cards
    }
  },
  
  { timestamps: true }
)
export default mongoose.model('users', User)
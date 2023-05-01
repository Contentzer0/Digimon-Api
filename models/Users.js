
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
    deck1: {type: Array},
    deck2: {type: Array},
    deck3: {type: Array},
    deck4: {type: Array},
    deck5: {type: Array},
  },
  
  { timestamps: true }
)
export default mongoose.model('users', User)
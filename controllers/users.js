import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'
import Cards from '../models/Structure.js'

// for development purposes
let SALT_ROUNDS = 11
let TOKEN_KEY = 'bananabunchkey'

// for production
if (process.env.NODE_ENV === 'production') {
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS)
  TOKEN_KEY = process.env.TOKEN_KEY
}

// for JWT expiration
const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      username,
      email,
      password_digest,
    })

    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select(
      'username email password_digest'
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
      console.log(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
}
export const addCard = async (req, res) => {
  try {
    const {cardId, userId} = req.body

    let user = await User.findByIdAndUpdate(
      userId, 
      {$push: {"deck1": cardId}}
    )
    
    res.status(201).json(user)
    
  } catch (error) {
    console.log(error.message)
    res.status(500).send('No Access')
  }
}
export const deleteUserCard = async (req, res) => {
  try {

    const {cardId, userId} = req.body

    let user = await User.findByIdAndUpdate(
      userId, 
      {$pull: {deck1: cardId}}
    )
    
    res.status(201).json(user)
    
  } catch (error) {
    console.log(error.message)
    res.status(500).send('No Access')
  }
}
export const deck1 = async (req, res) => {
  try {
      const deck = await User.findById(req.params.userId).select(
        'username deck1'
      ).populate("deck1")
      res.json(deck)
  } catch (error) {
      console.log(error.message)
      res.status(500).json({error: error.message})
  }
}
export const changeQuantity = async (req, res) => {
  try {
    const {cardId, userId} = req.body
    const deck = await Cards.findByIdAndUpdate( cardId, req.body )
    res.status(200).json(Cards)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const changePassword = async (req, res) => {}
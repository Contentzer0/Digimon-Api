import Cards from "../models/Structure.js"

export const getCards = async (req, res) => {
    try {
        const cards = await Cards.find()
        res.json(cards)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}

export const getCard = async (req, res) => {
    try {
        const {id} = req.params
        const card = await Cards.findById(id)
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const createCharacter = async (req, res) => {
    try {
        const card = new Cards(req.body)
        await character.save()
        res.status(201).json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const updateCard = async (req, res) => {
    const {id} = req.params
    const card = await Cards.findByIdAndUpdate(id,)
    res.status(200).json(card)
}
export const deleteCard = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Cards.findByIdAndDelete(id,)
        res.status(200).send("Card Deleted!")
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
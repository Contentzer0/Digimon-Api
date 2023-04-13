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
export const getColor = async (req, res) => {
    try {
        const card = await Cards.find({"color": `${req.params.color}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getName = async (req, res) => {
    try {
        const card = await Cards.find({"name": `${req.params.name}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getCardNumber = async (req, res) => {
    try {
        const card = await Cards.find({"cardnumber": `${req.params.cardnumber}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getLevel = async (req, res) => {
    try {
        const card = await Cards.find({"level": `${req.params.level}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getPlayCost = async (req, res) => {
    try {
        const card = await Cards.find({"play_cost": `${req.params.playcost}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getDp = async (req, res) => {
    try {
        console.log("I'm in here!", req.params.dp)
        const card = await Cards.find({"dp": `${req.params.dp}`})
        res.json(card)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
export const getEvolutionCost = async (req, res) => {
    try {
        const card = await Cards.find({"evolution_cost": `${req.params.evolutioncost}`})
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
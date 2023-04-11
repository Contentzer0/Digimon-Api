import mongoose from "mongoose";
import chalk from "chalk";
const MONGODB_URI = process.env.PROD_MONGDB || "mongodb://127.0.0.1:27017/digi-api"
// this is for Model.findByIdAndUpdate method, specifically so that {new: true}
mongoose.set("returnOriginal", false)
mongoose.connect(MONGODB_URI).catch((error) => 
    console.log("Error connecting to MongoDB: ", error.message))
mongoose.connection.on("disconnected", () => {
    console.log(chalk.bold("disconnected from MongoDB!"))
})    
mongoose.connection.on("error", (error) => {
    console.error(chalk.red(`mongoDB connection error: ${error}`))
})
export default mongoose.connection
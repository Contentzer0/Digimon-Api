import mongoose from "mongoose";
import chalk from "chalk";
const MONGODB_URI = "mongodb+srv://Conykins:GdufoYMMkj9hJSPp@cluster0.aagb6gk.mongodb.net/?retryWrites=true&w=majority"|| "mongodb://127.0.0.1:27017/digi-api"
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

console.log(MONGODB_URI)
export default mongoose.connection
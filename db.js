import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
); // mongod 했을때 나오는 PORT

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB")
const handleError = (error) => console.log(`x Error on DB connection:${error}`)

db.once("open", handleOpen);
db.on("error", handleError);
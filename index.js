import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import { UserRouter } from "./Routes/user.js"
import cors from 'cors'
import cookieParser from "cookie-parser"
dotenv.config()


const app = express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173","https://password-reset-flo-fe-harish.netlify.app"],
    credentials:true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)

mongoose.connect('mongodb+srv://harishmano98:Harish%402024@harish-mongo.uf15eex.mongodb.net/')


app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
})
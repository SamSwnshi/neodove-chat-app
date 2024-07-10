import express from "express";
import dotenv from 'dotenv'
import connectDb from "./db/config.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";


dotenv.config()


const app = express()
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port,()=>{
    connectDb();
    console.log(`Server is running on port ${port}`)
})


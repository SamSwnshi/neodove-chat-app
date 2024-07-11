import path from 'path'
import express from "express";
import dotenv from 'dotenv'
import connectDb from "./db/config.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import { server,app } from "./socket/socket.js"

const port = process.env.PORT || 8000;

const __dirname = path.resolve()

dotenv.config()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
});


server.listen(port,()=>{
    connectDb();
    console.log(`Server is running on port ${port}`)
})


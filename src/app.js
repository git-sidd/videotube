import express from "express"
import cors from "cors";
import cookieparser from "cookie-parser"

const app= express()
//configuring different things such as cors,cookie-parser,.json and static files.... 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//check notes for knowing more..
app.use(express.json({
    limit:"16kb"
}))

app.use(express.static("public"))

app.use(cookieparser())

//import route from user.routes.js
import userRouter from "./routes/user.routes.js"
//route declaration
app.use("/api/v1/users",userRouter)
export default app
 
require("express-async-errors")
require("dotenv").config()

const express = require("express")
const app = express()
// connect to the db
const connectDB = require("./db/connect")
// error handlers
const pathNotFound = require("./middleware/pathNotFound")
const errorHandlerMiddleware = require("./middleware/errorHandler")
const authenticateUser = require("./middleware/auth")
//get routers
const authRouter = require("./routes/auth")
const postsRouter = require("./routes/post")
app.use(express.json())

//routes
app.use("/api/auth", authRouter)
app.use("/posts", authenticateUser, postsRouter)

app.get("/authtesting", authenticateUser, (req, res) => {
  console.log(req.user)
})

app.use(pathNotFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3400

const start = async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`The server is live on ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()

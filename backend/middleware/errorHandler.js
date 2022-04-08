const CustomError = require("../errors/customError")

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  if (err instanceof CustomError) {
    return res.status(err.status).json({ err: err.message })
  }
  return res
    .status(500)
    .json({ err: "Something went wrong, please try again later" })
}

module.exports = errorHandlerMiddleware

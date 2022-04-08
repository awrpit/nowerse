const UnAuthenticatedError = require("../errors/unAuthenticatedError")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnAuthenticatedError("Authorization Invalid")
  }

  const token = authHeader.split(" ")[1]
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY)
    // attach the user for the further routes
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new UnAuthenticatedError("Authorization Invalid")
  }
}

module.exports = auth

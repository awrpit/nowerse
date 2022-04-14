const BadRequest = require("../errors/badRequest")
const UnAuthenticatedError = require("../errors/unAuthenticatedError")
const User = require("../models/User")

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(201).json({ name: user.name, token })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequest("Please Provide email and Password")
  }

  const user = await User.findOne({ email: email })
  if (!user) {
    throw new UnAuthenticatedError("No such user with matching email.")
  }

  const isPasswordCorrect = await user.verifyHash(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Incorrect Password")
  }
  const token = user.createJWT()
  res.status(200).json({ name: user.name, token })
}

module.exports = {
  login,
  register,
}

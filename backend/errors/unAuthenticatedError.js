const CustomError = require("./customError")

class UnAuthenticatedError extends CustomError {
  constructor(message) {
    super(message)
    this.status = 401
  }
}

module.exports = UnAuthenticatedError

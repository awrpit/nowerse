const CustomError = require("./customError")
// for invalid request by the user.
class BadRequest extends CustomError {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

module.exports = BadRequest

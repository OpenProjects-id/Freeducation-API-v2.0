const { ErrorTokens } = require("../constant/errorTokens");
const { HttpStatusCode } = require("../constant/httpStatusCodes");

function unhandledErrorHandler(err, req, res, next) {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR);
  res.send({
    error: ErrorTokens.INTERNAL_SERVER_ERROR,
    message: "Internal Server Error",
  });
}

module.exports = { unhandledErrorHandler };

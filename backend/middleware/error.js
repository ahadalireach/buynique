const errorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB Id Error
  if (err.name === "CastError") {
    const message = `Resource not found with this id. Invalid ${err.path}`;
    err = new errorHandler(message, 400);
  }

  // Duplicate Key Error
  if (err.name === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new errorHandler(message, 400);
  }

  // Wrong JWT Token Error
  if (err.name === "JsonWebTokenError") {
    const message = "Your url is invalid. Please try again later.";
    err = new errorHandler(message, 400);
  }

  // JWT Expired Token Error
  if (err.name === "TokenExpiredError") {
    const message = "Your url has expired. Please try again later.";
    err = new errorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

// class errorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;

//     Error.captureStackTrace(this, this.constructor);
//   }
// }

const errorHandler = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;

  Error.captureStackTrace(error, errorHandler);

  return error;
};

module.exports = errorHandler;

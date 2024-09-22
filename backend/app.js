const express = require("express");
const errorHandler = require("./utils/errorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "/backend/config/.env",
  });
}

// Error Handling
app.use(errorHandler);

module.exports = app;

const app = require("./app");
const connectDB = require("./db/db");
const colors = require("colors");
const PORT = process.env.PORT || 8000;

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server for handling uncaught exception!`);
});

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Connect to MongoDB database
connectDB();

// Server configuration
const server = app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}`.blue.italic.underline
  );
});

// Handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server for handling unhandled promise rejection!");

  server.close(() => {
    process.exit(1);
  });
});

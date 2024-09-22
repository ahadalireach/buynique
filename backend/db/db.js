const mongooose = require("mongoose");

const connectDB = () => {
  mongooose
    .connect(process.env.MONGO_URL)
    .then((data) =>
      console.log(
        `MongoDB Connected with Server: ${data.connection.host}`.yellow
      )
    )
    .catch((err) => console.error(err));
};

module.exports = connectDB;

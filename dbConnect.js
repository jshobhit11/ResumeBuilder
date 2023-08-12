const mongoose = require("mongoose");

const URL =
  "mongodb+srv://shobhit30:Shobhitjain@cluster0.bzpxzv9.mongodb.net/resumemaker";

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});
connection.on("error", (error) => {
  console.log(error);
});

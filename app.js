const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const orderRoutes = require("./routes/OrderRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(process.env.DBURI)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.use("/", (req, res) => {
//   res.json({ Message: "Hey welcome" });
// });

app.use("/api/order", orderRoutes);

app.use("/", (req, res) => {
  res.json({
    Message: "Welcome to Chekwa Backend Service!",
  });
});

module.exports = app;

const express = require ("express");
const mongoose = require ("mongoose");
const router = require("./routes/book-routes");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://Admin:TYTtRTYiA2Iq3A4b@cluster0.wnk78.mongodb.net/BookStore"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

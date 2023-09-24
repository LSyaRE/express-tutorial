
// import express from "express";
// // const groceriesRoute = require("./routes/groceries");
// import groceriesRoute  from "./routes/groceries";

const express = require("express");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");


const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.listen(PORT, () => console.info(`listening on ${PORT}`));



app.use("/api/v1/groceries",groceriesRoute);
app.use("/api/v1/markets",marketsRoute);


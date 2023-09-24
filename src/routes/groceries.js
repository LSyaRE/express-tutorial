// import { Router } from "express";

const { Router } = require("express");

const router = Router();
const groceries = [
  {
    item: "milk",
    quantity: 5,
  },
  {
    item: "cereal",
    quantity: 10,
  },
  {
    item: "candy",
    quantity: 100,
  },
];


router.get("/", (req, res) => {
  res.send(groceries);
});

router.get("/:item", (req, res) => {

  const { item } = req.params;

  const data = groceries.find((grocerie) => grocerie.item == item);

  if (!data) throw "Grocerie not found"

  res.send(data);
});

// router.get("/", (req, res, next) => {
//   console.log("Before Handling Request");
//   next();
// },
//   (req, res, next) => {
//     res.send(groceries);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Finished Executing GET Request");
//     next();
//   },
//   () => {
//     console.log("The end");
//   },
// );

router.post('/', (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201)
});

module.exports = router;



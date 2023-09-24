// import { Router } from "express";

const { Router } = require("express");

const router = Router();
const markets = [
  {
    store: "Whole Foods",
  },
  {
    store: "Trader Joe",
  },
  {
    store: "Albertsons",
  },

];


router.get("/", (req, res) => {
  res.send(markets);
});

router.get("/:item", (req, res) => {

  const { item } = req.params;

  const data = markets.find((grocerie) => grocerie.item == item);

  if (!data) throw "Grocerie not found"

  res.send(data);
});


router.post('/', (req, res) => {
  console.log(req.body);
  markets.push(req.body);
  res.send(201)
});

module.exports = router;





const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use((req, res, next)=>{
  console.log(req.url);
  next();
});

app.listen(PORT, () => console.info(`listening on ${PORT}`));

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

app.get("/groceries", (req, res) => {
  res.send(groceries);
});

// app.get("/groceries", (req, res, next) => {
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

app.post('/groceries', (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201)
});

import express from "express";
import { binarySearch, bubbleSort } from "./index";
const app = express();
const port = 3000;

//console.log(binarySearch([2, 3, 4], 5));
//console.log(bubbleSort([3, 1, 2]));
//console.log(bubbleSort([6, 3, 3, 4, 2, 3, 1]));

// -------
app.get("/", (req, res) => {
  res.send("Get response works");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port} 🦄`);
});

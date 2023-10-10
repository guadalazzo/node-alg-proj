import express from "express";
import { binarySearch, bubbleSort, selectionSort, quickSort } from "./index";
const app = express();
const port = 3000;

// -------
app.get("/", (req, res) => {
  res.send("Get response works");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port} 🦄`);
});

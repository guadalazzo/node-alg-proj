"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const app = (0, express_1.default)();
const port = 3000;
//console.log(binarySearch([2, 3, 4], 5));
//console.log(bubbleSort([3, 1, 2]));
//console.log(bubbleSort([6, 3, 3, 4, 2, 3, 1]));
console.log((0, index_1.quickSort)([9, 2, 0, 3, 1, 7, 2, 3, 1]));
// -------
app.get("/", (req, res) => {
  res.send("Get response works");
});
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port} 🦄`);
});
//# sourceMappingURL=app.js.map

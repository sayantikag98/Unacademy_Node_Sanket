"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startFunc = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = 3000;
app.use((0, _morgan.default)("dev")); // app.use(express.json());

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.get("/", (req, res) => {
  // res.send("Hello World Sayantika");
  res.json({
    msg: "Get Request"
  });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    msg: "Post request send..."
  });
});

const startFunc = () => {
  app.listen(PORT, () => {
    console.log(`Server started at localhost:${PORT}`);
  });
}; // default export with arrow function syntax
// export default () => {};


exports.startFunc = startFunc;
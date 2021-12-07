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

const router = _express.default.Router();

app.use((0, _morgan.default)("dev"));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use("/posts", router); // Custom middleware

const customMiddleWareFunc = (req, res, next) => {
  console.log("Custom middleware created");
  console.log("Custom middleware");
  console.log(req.body, req.params, res.json.msg);
  next();
};

app.get("/", customMiddleWareFunc, (req, res) => {
  console.log("Call back called");
  console.log(req.body, req.params, res.json.msg); // res.send("Hello World Sayantika");

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
router.route("/").get((req, res) => {
  res.send("Posts route get");
}).post((req, res) => {
  console.log(req.body);
  res.send("Posts route post");
});
router.route("/:id/:num").patch(customMiddleWareFunc, (req, res) => {
  console.log("Patch request");
  console.log(req.body, req.params);
  res.send("Posts route patch");
}).put((req, res) => {
  console.log(req.body, req.params);
  res.send("Posts route put");
}).delete((req, res) => {
  console.log(req.body, req.params);
  res.send("Posts route delete");
});

const startFunc = () => {
  app.listen(PORT, () => {
    console.log(`Server started at localhost:${PORT}`);
  });
}; // default export with arrow function syntax
// export default () => {};


exports.startFunc = startFunc;
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

const app = express();
const PORT = 3000;
const router = express.Router();


app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({extended:true}));
app.use("/posts",router);


// Custom middleware
const customMiddleWareFunc = (req, res, next) => {
    console.log("Custom middleware created");
    console.log("Custom middleware");
    console.log(req.body, req.params, res.json.msg);
    next();
};

app.get("/", customMiddleWareFunc, (req, res) => {
    console.log("Call back called");
    console.log(req.body, req.params, res.json.msg);
    // res.send("Hello World Sayantika");
    res.json({
        msg:"Get Request"
    });
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Post request send..."
    });
});

router
.route("/")
.get((req, res) => {
    res.send("Posts route get");
})
.post((req, res) => {
    console.log(req.body);
    res.send("Posts route post")
});

router
.route("/:id/:num")
.patch(customMiddleWareFunc, (req, res) => {
    console.log("Patch request");
    console.log(req.body, req.params);
    res.send("Posts route patch");
})
.put((req, res) => {
    console.log(req.body, req.params);
    res.send("Posts route put");
})
.delete((req, res) => {
    console.log(req.body, req.params);
    res.send("Posts route delete");
});

export const startFunc = () => {
    app.listen(PORT, () => {
        console.log(`Server started at localhost:${PORT}`);
    });
};

// default export with arrow function syntax
// export default () => {};
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

const app = express();
const PORT = 3000;


app.use(morgan("dev"));
// app.use(express.json());
app.use(json());
app.use(urlencoded({extended:true}));

app.get("/", (req, res) => {
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

export const startFunc = () => {
    app.listen(PORT, () => {
        console.log(`Server started at localhost:${PORT}`);
    });
};

// default export with arrow function syntax
// export default () => {};
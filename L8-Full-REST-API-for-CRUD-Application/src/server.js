// server.js contains all the configuration data

import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import postRouter from "./posts/post-router";
import userRouter from "./users/user-router";
import connect from "./utils/database";
import cors from "cors";

const app = express();
const PORT = 3000;


app.use(morgan("dev")); // put this before registering any routes
app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors()); // enables all CORS requests
app.use("/posts", postRouter);
app.use("/users", userRouter);


export default () => {
    connect();
    app.listen(PORT, () => {
        console.log(`Server listening on localhost:${PORT}`);
    });
};


// post route is being registered => post router => post controller (uses the post model) => crud (common logic for controllers are implemented)
// the above logic is same for both post and user collections 

// connection string has been defined in development.js that is used in database.js which is used in server.js

// Request <=> Router <=> Controller <=> Model <=> Database


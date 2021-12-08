import mongoose, { connect } from "mongoose";
import { connectionString } from "../config/development";

export default function (url = connectionString.databaseURL, opts = {} ){
    console.log("Mongo DB connected");
    mongoose.connect(url, {...opts, useNewUrlParser: true}); // usenewurlparser to avoid deprecation warning
};

// if you want can use this function with custom connection string otherwise it will take databaseurl as default


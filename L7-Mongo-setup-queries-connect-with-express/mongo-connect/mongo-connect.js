const Mongoose = require("mongoose");

const connect = async () => {
    await Mongoose.connect("mongodb://localhost:27017/Unacademy_node_sanket");
    console.log("MongoDB connection established");
};

module.exports = connect;
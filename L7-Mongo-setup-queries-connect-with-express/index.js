const Mongoose = require("mongoose");

const blogSchema = Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String
}, {timestamps: true});

const Blog = Mongoose.model("blog", blogSchema);


const connect = async () => {
    await Mongoose.connect("mongodb://localhost:27017/Unacademy_node_sanket");
    const b = await Blog.create({title: "Learning Node", body: "For the first time"});
    console.log(b);
};

connect();
const Blog = require("../models/blogs");
const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getBlogsByTitle = async (title) => {
    try{
        const blog = await Blog.find({title}).populate("author").exec();
        console.log(blog);
    }
    catch(err){
        console.log(err);
    }
};

getBlogsByTitle("Learning");
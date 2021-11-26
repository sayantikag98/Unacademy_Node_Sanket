const Blog = require("../models/blogs");
const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getBlogsByAuthorId = async () => {
    try{
        const user = await User.findById("619f98cbc022a7ae322cfa93").exec();
        const blog = await Blog.find({author: user.id}).populate("author").exec();
        console.log(blog);
    }
    catch(err){
        console.log(err);
    }
};

getBlogsByAuthorId();
const Blog = require("../models/blogs");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getAllBlogs = async () => {
    try{
        // const blog = await Blog.create({title: "Learning 2", description: "It is fun to learn new things", author: "619f98cbc022a7ae322cfa93"});
        // console.log(blog.populate('author'));
    }
    catch(err){
        console.log(err);
    }
};

getAllBlogs();
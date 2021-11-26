const Blog = require("../models/blogs");
const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getAllBlogs = async () => {
    try{
        await Blog.deleteMany({});
        const user = await User.findById("619f98cbc022a7ae322cfa93").exec();
        await new Blog({title: "Learning", description: "It is fun to learn new things", author: user.id}).save(); // if using new Blog to create blog document .save() is important
        // without defining author will get reference error


        // populate() which lets you reference documents in other collections.
        // Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). 
        // Ref: https://mongoosejs.com/docs/populate.html
        // cant use populate while creating new documents
        const blog = await Blog.findOne({title: "Learning"}).populate("author").exec();
        console.log(blog);
    }
    catch(err){
        console.log(err);
    }
};

getAllBlogs();



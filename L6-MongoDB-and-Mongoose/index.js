const Mongoose = require("mongoose");

const blog = Mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    tags:[{type: String}]
}, {timestamps: true});

const Blog = Mongoose.model('blog', blog); // first string can be singular mongoodb makes it plural by default


const connect = async () => {
    try{
        /*
        --> here the protocol in connection string is mongodb for local storage and https for cloud storage
        --> connection string will change according to whether it is stored locally or globally
        --> port will be 99% 27017
        --> if the database does not exists then it will create a new one for us
        */
        await Mongoose.connect("mongodb://localhost:27017/Unacademy_node_sanket"); 
        const b = await Blog.create({title: "node tutorial 2", description: "Starting to learn about node"});
        // b is a mongoose object
        console.log(b);
    }
    catch(err){
        console.log(err);
    }   
};

connect();
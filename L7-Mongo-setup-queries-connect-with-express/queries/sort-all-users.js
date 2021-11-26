const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");
connect();

const sortedAllUsers = async () => {
    try{
        const users = await User.find({}).sort("firstName").exec(); // sorted in ascending order of firstName
        // const users = await User.find({}).sort("-firstName").exec(); // sorted in descending order of firstName
        console.log(users);
    }
    catch(err){
        console.log(err);
    }
};

sortedAllUsers();
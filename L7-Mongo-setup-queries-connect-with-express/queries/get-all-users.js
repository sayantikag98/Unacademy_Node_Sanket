const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getAllUsers = async () => {
    try{
        const users = await User.find().exec();
        // .find() returns a query object if we want an actual promise then we can do .exec()
        console.log(users[1]);
    }
    catch(err){
        console.log(err);
    }
};

getAllUsers();
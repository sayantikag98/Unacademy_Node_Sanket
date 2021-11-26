const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();

const getUserById = async () => {
    try{
        const user = await User.findById("619f98cbc022a7ae322cfa93");
        console.log(user);
        console.log(user.id, user._id.valueOf());
        console.log(user.id === user._id.valueOf()); // true // user._id is the new ObjectId(string) so user._id.value() will return the string
    }
    catch(err){
        console.log(err);
    }   
};

getUserById();
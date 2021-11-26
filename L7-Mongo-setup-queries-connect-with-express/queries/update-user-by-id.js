const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();


const updateUserById = async() => {
    try{
        // const user = await User.findByIdAndUpdate("619f98cbc022a7ae322cfa93", {lastName: "Ghosh"}).exec(); // this returns by default the older unupdated object and not the updated one
        const user = await User.findByIdAndUpdate("619f98cbc022a7ae322cfa93", {lastName: "Rai"}, {new: true}).exec(); // this returns the updated object beacuse of {new:true}
        console.log(user);
    }
    catch(err){
        console.log(err);
    }  
};

updateUserById();
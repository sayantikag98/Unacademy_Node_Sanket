const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();


const selectFirstNameandLastNamefromFind = async () => {
    try{
        const usersTitle = await User.find({}).select({firstName: 1, lastName: 1, _id: 0}).sort("firstName").exec(); // by default _id is printed but if _id: 0 then id is not printed
        console.log(usersTitle);
    }
    catch(err){
        console.log(err);
    }
};

selectFirstNameandLastNamefromFind();

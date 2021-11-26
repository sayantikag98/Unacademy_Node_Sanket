const User = require("../models/users");
const connect = require("../mongo-connect/mongo-connect");

connect();


const createUser = async () => {
    try{
        /*
        Option 1:
        User.deleteMany({})
        .then(() => {
            console.log("database erased");
            User.create({
                firstName: "Sayantika",
                lastName: "Ghosh",
                email: "sg@gmail.com"
            });
        })  
        */
       
        // Option 2:
        // all the user in the database deleted this is done in order to start from a clean slate 
        // otherwise when user created with same email it will throw error that the email is not unique
        await User.deleteMany({});
        console.log("database erased");
        await User.create({
            firstName: "Sayantika",
            lastName: "Ghosh",
            email: "sg@gmail.com"
        })
        console.log("new user created");

        await User.create([
            {
                firstName: "Amrita",
                lastName: "Paul",
                email: "ap@gmail.com",
                isStudent: false
            },
            {
                firstName: "Ajay",
                lastName: "Jain",
                email: "aj@gmail.com"
            },
            {
                firstName: "Rhea",
                lastName: "Rai",
                email: "rr@gmail.com",
                isStudent: false
            }
        ])
    }
    catch(err){
        console.log(err);
    }   
};

createUser();
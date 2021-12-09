import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});


// for hashing the password field for the user document using bcryptjs package in npm

// .pre is the trigger or the middleware which should be called before the document is saved that means that
// the password should be hashed before the document is saved
userSchema.pre("save", function(next) { // cannot use arrow function in the callback function because of this keyword
    bcryptjs.hash(this.password, 8, (err, hash) => {
        if(err){
            return next(err);
        }
        this.password = hash;
        next();
    });
});

// validate password
userSchema.methods.validatePassword = function(password){
    const passHash = this.password;
    return new Promise((resolve, reject) => {
        bcryptjs.compare(password, passHash, (err, res)=>{
            if(err) return reject(err);
            resolve(res);
        });
    });
};



export default mongoose.model("user", userSchema);
const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String, 
        required: true,
        unique: true
    },
    isStudent: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});


module.exports = Mongoose.model("user", userSchema);
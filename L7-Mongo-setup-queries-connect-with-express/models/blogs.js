const Mongoose = require("mongoose");

const blogSchema = Mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    author: {
        // the below type and ref is used to reference another schema (user schema) from this particular blog schema
        // Ref: https://stackoverflow.com/questions/29078753/how-to-reference-another-schema-in-my-mongoose-schema/29079951
        type: Mongoose.Schema.Types.ObjectId, // referencing to the object id of user schema // like foreign key in sql
        ref: "user",
        required: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("blog", blogSchema);
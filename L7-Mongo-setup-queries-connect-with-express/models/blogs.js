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
        ref: "user", // use collection name to refer to in the database
        required: true
    }
}, {timestamps: true});


// triggers // mongoose middlewares or hooks
// ref: https://mongoosejs.com/docs/middleware.html
blogSchema.post("save", (result) => {   // this callback is executed whenever a new blog is created
    console.log("*************************");
    console.log(result);
    console.log("*************************");
});

module.exports = Mongoose.model("blog", blogSchema);


// can use mongoose virtuals for creating views
// In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
// ref: https://mongoosejs.com/docs/tutorials/virtuals.html
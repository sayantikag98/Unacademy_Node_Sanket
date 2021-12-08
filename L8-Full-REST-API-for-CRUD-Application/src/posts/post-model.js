import mongoose from "mongoose"; // this will work because babel has been configured here


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        minlength: 5
    },
    status: {
        type: String,
        enum: ['draft', 'under review', 'published'],
        default: 'draft'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {timestamps: true});

export default mongoose.model("post", postSchema);
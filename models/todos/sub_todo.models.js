
import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        lowercase: true
    },
    createdBy: {
        tyep: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isDone: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
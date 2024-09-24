
/*
    1. import mongoose
    2. create a schema
    3. export as a model
*/

import mongoose from "mongoose";

const todoListSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    contant: {
        type: String,
        lowercase: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" // it takes referance from User, so check it correctly.
    },
    isDone: {
        type: Boolean,
        default: false
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, {timestamps: true});

export const TodoList = mongoose.model("TodoList", todoListSchema);
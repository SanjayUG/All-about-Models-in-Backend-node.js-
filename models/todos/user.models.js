
/*
    1. import mongoose
    2. create a schema
    3. export as a model
*/

import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required..."],
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema); // in db `User` is saved as `users`.
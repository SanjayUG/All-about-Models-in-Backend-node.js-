
/*  import mongoose from "mongoose";

    const userSchema = new mongoose.Schema({}, {timestamps: true});

    export const User = mongoose.model("User", userSchema);
*/

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    },
    genger: {
        type: String,
        require: true,
        enum: ["male", "female", "others"],
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);


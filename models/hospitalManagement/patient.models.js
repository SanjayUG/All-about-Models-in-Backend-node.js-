
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    typeOfDiseased: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);
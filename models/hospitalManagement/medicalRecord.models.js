
import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    disease: {
        type: String,
        unique: true
    },
    mdeication: {
        type: String
    },
    costOfMedication: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
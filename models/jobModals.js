import mongoose, { Schema } from "mongoose";

const JobSchema = new mongoose.Schema({
    company: String,
    position: String,
    jobStatus: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    jobTypes: {
        type: String,
        enum: ['full-time', 'part-time', 'internship'],
        default: 'full-time',
    },
    jobLocation: {
        type: String,
        default: "my client"
    },
}, { timestamps: true });

export default mongoose.model('Job', JobSchema);

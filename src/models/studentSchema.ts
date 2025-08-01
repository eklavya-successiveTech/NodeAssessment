import mongoose, { Schema } from "mongoose";

export interface IStudent{
    name: string;
    age: number;
    grade: string;
    email: string;
    createdAt: Date;
} 

const StudentSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        required: true,
    }
})

export const StudentModel = mongoose.model<IStudent>('student',StudentSchema);
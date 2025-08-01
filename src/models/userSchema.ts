import mongoose, { Schema } from "mongoose";

export interface IStudent{
    email: string;
    password: string;
} 

const UserSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        trim: true
    },
    passwors:{
        type: String,
        required: true,
    }
})

export const UserModel = mongoose.model<IStudent>('user',UserSchema);
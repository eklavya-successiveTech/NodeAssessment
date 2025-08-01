import { Response, Request, NextFunction } from "express";
import { UserModel } from "../../models/userSchema";
import bcrypt from "bcrypt";

export const register = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const{email, password} = req.body;

        const exists = await UserModel.findOne({email});

        if(email){
            throw new Error("Email already exists");
        }

        const hashPassword = bcrypt.hash(password,10)
        const newUser = new UserModel({
            email: email,
            password: hashPassword,
        });

    }
    catch(err){
        next(err);
    }
}
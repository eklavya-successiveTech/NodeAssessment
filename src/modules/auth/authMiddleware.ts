import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "my_secret";

export interface authenticationRequest extends Request{
    user:{
        email: string;
    }
}

export const authMiddleware = (req: authenticationRequest, res: Response, next: NextFunction) =>{
    try{
        const header = req.headers.authorization;

    if(!header){
        throw new Error("Header not found");
    }
    const token = header.split(' ')[1];

    if(!token){
        throw new Error("Token not found");
    }

    const decoded = jwt.verify(token, JWT_SECRET) as authenticationRequest;
     (req.user as any) = decoded;
     next();
    }
    catch(err){
        next(err);
    }
} 
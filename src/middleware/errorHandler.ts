import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
    const status = err.status;

    res.status(status).json{
        message: err.message;
    }
}
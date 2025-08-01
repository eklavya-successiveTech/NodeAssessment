import { StudentModel } from "../../../models/studentSchema";
import { Request, Response, NextFunction } from "express";

export class studentController{
    static async addStudent(req: Request, res: Response, next: NextFunction){
        try{
            const{ name,age, grade, email} = req.body;

        const student = await StudentModel.findOne({email});

        if(student){
            throw new Error("Student already exists with the same email");
        }
        const createStudent = await new StudentModel({
            name:name,
            age: age,
            grade: grade,
            email: email,
            createdAt: Date.now()
        });

        await createStudent.save();

        res.status(201).json({
            status: true,
            data: createStudent,
        });
        }
        catch(err){
            next(err);
        }
        
    }
    static async getStudents(req: Request, res: Response, next: NextFunction){
       try{
         const page = parseInt(req.query.page as string);
         const limit = parseInt(req.query.limit as string);
         const skip = page*limit;

         const students = await StudentModel.find()
         .skip(skip)
         .limit(limit)

        if(students){
            throw new Error("No student data found");
        }
         res.status(200).json({
            status: true,
            data: students
         })
       }
       catch(err){
        next(err);
       }
    }
    static async getOneStudent(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.query.id;
            const student = await StudentModel.findById(id);

            if(student){
            throw new Error("Invalid ID");
            }
            
            res.status(200).json({
               status: true,
            data: student 
            })
        }
        catch(err){
            next(err);
        }
    }
    static async updateStudent(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.query.id;
            const student = await StudentModel.findById(id);
            if(!student){
            throw new Error("Invalid ID");
            }
            const{ name,age, grade, email} = req.body;
            let updateName = student?.name;
            let updateAge = student?.age;
            let updateGrade = student?.grade;
            let updateEmail = student?.email;
            if(name){
                 updateName = student?.name;
            }
            if(age){
                 updateAge = age;
            }
            if(grade){
                 updateGrade = grade;
            }
            if(email){
                 updateEmail = email;
            }
            const updateStudent = await StudentModel.findByIdAndUpdate(id,{
                name: updateName,
                age: updateAge,
                grade: updateGrade,
                email: updateEmail
            } );

            
            res.status(200).json({
               status: true,
            data: updateStudent
            })
        }
        catch(err){
            next(err);
        }
    }
    static async deleteStudent(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.query.id;
            const student = await StudentModel.findById(id);
            if(!student){
            throw new Error("Invalid ID");
            }
            const deleteStudent = await StudentModel.findByIdAndDelete(id);

            res.status(200).json({
               status: true
            })
        }
        catch(err){
            next(err);
        }
    }
}
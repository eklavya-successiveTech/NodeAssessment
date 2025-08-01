import { studentController } from "../controller/studentController";
import express from "express";

const router = express.Router();

router.post('students',studentController.addStudent);
router.get('students', studentController.getStudents);
router.get('students/:id', studentController.getOneStudent);
router.put('students/:id', studentController.updateStudent);
router.delete('students/:id',)


export default router;
import studentRoutes from "../modules/student/routes/index";
import express from "express";

const router = express.Router();

router.use(studentRoutes);

export default router;
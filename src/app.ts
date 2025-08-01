import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import mainRoutes from "./routes/index";

mongoose.connect("mongodb://localhost:27017/AssessmentDB")
.then(()=> console.log("mongo is running"));

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api',mainRoutes);

export default app;

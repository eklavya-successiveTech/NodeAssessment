import express from "express";
import { register } from "module";

const router = express.Router();

router.post('/register', register);

export default router;
import express from "express";
import { authRouter } from "./auth/auth";
export const routes = express.Router();

routes.use("/auth",authRouter);
import express, { Request, Response } from "express";

export const authRouter = express.Router();

authRouter.post('/register', async (req ,res) => {
    const {username,password,email} = req.body;
    console.log(username,password,email);
    res.status(200).json({
        msg : "details came"
    })
})
authRouter.post('/signin', async (req : Request,res : Response) => {

    
})
authRouter.post('/logout', async (req : Request,res : Response) => {
    
})

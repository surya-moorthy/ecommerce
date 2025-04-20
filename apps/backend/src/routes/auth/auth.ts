import express, { Request, Response } from "express";
import { LoginSchema, RegisterSchema } from "../../types/types";
import { prisma } from "@repo/db";
export const authRouter = express.Router();

authRouter.post('/register', async (req : Request,res : Response) => {
    let setRole = "";

    const {name , password , email,role} = req.body;
    if (role === undefined) {
        let setRole = "USER";
    }
    try {
         const user = await prisma.user.create({
               data : {
                  email : email ,
                  password : password,
                  name : name
               }
         })
         console.log(user)
         res.status(200).json({
                user : user       
            })
                        
    }catch(e){
        res.status(500).json({

            msg : "server error",
            error : e
        })
    }
    
   
    
})
// authRouter.post('/signin', async (req : Request,res : Response) => {
//     const result = LoginSchema.safeParse(req.body);
//     if(!(result.success)){
//         res.status(400).json({
//             msg : "Provided not validated data for user register"
//         })
//     }

//     const {username , password , email} = result.data;

//     try {

//     }catch{
//         res.status(500).json({
//             msg : "server error"
//         })
//     }
    
    
// })
authRouter.post('/logout', async (req : Request,res : Response) => {
    
})

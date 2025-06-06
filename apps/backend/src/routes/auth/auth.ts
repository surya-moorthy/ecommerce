
import { LoginSchema, ResetSchema } from "@types";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import z from "zod";
import jwt from "jsonwebtoken";
import { userMiddleware } from "@usermiddleware";

export const authRouter = express.Router();

const RegisterSchema = z.object({
    username : z.string(),
    password : z.string(),
    email : z.string()
})


const jwtsecret : string = process.env.JWT_SECRET || "keysecret";

authRouter.post('/register',async (req,res)=>{
   const {success} = RegisterSchema.safeParse(req.body);
   if (!success) {
       res.status(400).json({
         msg : "Invalid Inputs"
       })
   }
   const {username,password,email} = req.body;
   try {
      
      const salt =await  bcrypt.genSalt(10);
      const hashedpass = await bcrypt.hash(password,salt);
      const userResponse =  .create({
         data : {
            name : username,
            password : hashedpass,
            email : email
         }
      }
      )

      res.status(200).json({
         msg : "User created Successfully",
      })
   }catch(e){
      res.status(403).json({
         msg : "Error has happened",
         err : e
      })
   }
})

authRouter.post("/login",async (req,res)=>{
  const {success} = LoginSchema.safeParse(req.body);
  if (!success) {
   res.status(401).json({
      msg : "Invalid Inputs"
   })
   return 
}

   type loginRequest = z.infer<typeof LoginSchema>;

   const {email,password} = req.body as loginRequest;
   try {
      const user  = await prisma.user.findFirst({
        where : {
           email: email 
        }    
      })
      if (!user) {
         res.status(401).json({
            msg : "your are not registered"
         })
         return
      }
  
      const passverify = bcrypt.compare(password,user?.password as string);
      if (!passverify) {
         res.status(401).json({
            msg : "Password Invalid"
         })
      }
      const jwtToken =  jwt.sign({userId: user?.id,email},jwtsecret, {expiresIn : '10min'});
      res.setHeader("set-cookie",`token=${jwtToken}`);
      res.status(200).json({
         msg : "User logged in Successfully",
         token : jwtToken
      })
   }
   catch(e){
        res.status(403).json({
         msg : "An Error occured",
         err : e
        })
   }
})

authRouter.post("/logout",userMiddleware,async (req,res)=>{
   const userId = res.locals.userId;
    try {
      await prisma.user.delete({
         where : {
            id : userId,    
         }
      })
      res.status(200).json({
         msg : "User Logged out successfully"
      })
    }
    catch(e) {
      msg : "Error Occured while Log out"
    }
})

authRouter.get('/me',userMiddleware,async (req,res)=> {
   const userId = res.locals.userId;
   try {
      const user = await prisma.user.findFirst({
         where : {
            id : userId
         }
      })
      res.status(200).json({
         user : user
      })
   }
   catch(e) {
      res.status(403).json({
         msg : "Error Occured",
         err : e
      })
   }
})

authRouter.put("/profile",(req,res)=>{

})

authRouter.post("/password/reset",async (req,res)=>{
   const {success} = ResetSchema.safeParse(req.body);

   if(!success) {
      res.status(401).json({  msg : "Invalid Inputs"  })
      return
   }
   type resetRequest = z.infer<typeof ResetSchema>;
   const {email,password} = req.body as resetRequest;
   try {
      const salt = await  bcrypt.genSalt(10);
      const hashedpass = await bcrypt.hash(password,salt);
      await prisma.user.update({
         where : {
            email : email
         },
         data : {
            password : hashedpass
         }
      })
      res.status(200).json({ msg : "Password reset Successfully"})
   } catch(e) {
       res.status(403).json({ 
         msg : "error occured",
         err : e
        })
   }  
})

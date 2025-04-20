import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api/v1",routes);
dotenv.config();

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})
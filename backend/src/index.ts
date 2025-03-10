import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("Connected to MongoDB");
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(req:Request, res: Response) => {
    res.json({message: "Hello World!"});
})

app.listen(8000, () => {
    console.log(`server running at http://localhost:8000`);
    
})
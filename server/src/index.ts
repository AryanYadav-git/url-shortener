//Dependencies
import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import helmet from 'helmet';
import connectDb from './db/db';
import url from "./routes/url"
dotenv.config();
const port = process.env.PORT || 5001;

//connecting Database
connectDb();

//initialising app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

//Routes
app.use("/api/", url);


//Port listening
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})

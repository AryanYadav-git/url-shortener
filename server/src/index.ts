import express from 'express';
import cors from "cors";
const port = process.env.PORT || 5001;
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})

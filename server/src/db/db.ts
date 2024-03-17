import mongoose from "mongoose";

const connectDb = async() => { 
    try{
        const connection = await mongoose.connect(process.env.DB);
        console.log("Database connected");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDb
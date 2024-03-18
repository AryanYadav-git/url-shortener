import mongoose from "mongoose";
import { nanoid } from "nanoid";

const UrlSchema = new mongoose.Schema({
    fullUrl: {
        type:String,
        required:true
    },
    slug: {
        type:String,
        required:true,
        default: () => "http://localhost:8080/api/"+nanoid().substring(0,8)
    }
},{
    timestamps:true,
});

export const urlModel = mongoose.model("shortUrl",UrlSchema);

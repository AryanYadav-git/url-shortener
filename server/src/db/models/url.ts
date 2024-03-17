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
        default: () => nanoid().substring(0,8)
    }
},{
    timestamps:true,
});

export const urlModel = mongoose.model("shortUrl",UrlSchema);

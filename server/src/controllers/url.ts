import express from "express";
import { urlModel } from "../db/models/url";

export const createUrl = async(req:express.Request, res:express.Response) => {
    try {
        const { fullUrl } = req.body;
        const urlFound = await urlModel.find({fullUrl});
        if(urlFound.length > 0){
            res.status(409).send(urlFound[0]);
        }else{
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(200).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({"message": "Internal server error"});
    }
}

export const getUrl = async(req:express.Request, res:express.Response) => {
    try {
        const { slug } = req.params;
        const urlFound = await urlModel.findOne({slug});
        if(!urlFound) {
            res.status(404).send({"message": "Url Not Found"});
        }
        res.redirect(`${urlFound.fullUrl}`);
    } catch (error) {
        res.status(500).send({"message": "Internal server error"});
    }
}
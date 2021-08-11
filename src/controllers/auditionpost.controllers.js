import { createAuditionPost, deleteAuditionPost, getAuditionPost, getAuditionPosts, updateAuditionPost } from "../services/auditionpost.services.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import { validationResult } from "express-validator";

async function httpCreateAuditionPost(req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        errors.array().forEach((error) => {
            return res.status(400).json(error.msg);
        });
    };

    return res
            .status(201)
            .json(await createAuditionPost(req.body,req.user._id));
}

async function httpGetAuditionPosts(req,res){
    return res
            .status(200)
            .json(await getAuditionPosts());
}

async function httpGetAuditionPost(req,res){
    return res
            .status(200)
            .json(await getAuditionPost(req.params.id));
}

async function httpUpdateAuditionPost(req,res){
    const auditionpost = await getAuditionPost(req.params.id);
    if (auditionpost.author.toString() !== req.user._id.toString()) throw new ErrorResponse("You're not authorized to do this", 403);
    return res
            .status(200)
            .json(await updateAuditionPost(auditionpost.id,req.body));
}

async function httpDeleteAuditionPost(req,res) {
    return res
            .status(200)
            .json(await deleteAuditionPost(req.params.id));
}

export {
    httpCreateAuditionPost,
    httpUpdateAuditionPost,
    httpGetAuditionPosts,
    httpGetAuditionPost,
    httpDeleteAuditionPost,
}
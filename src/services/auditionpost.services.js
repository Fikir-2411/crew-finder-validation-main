import AuditionPostModel from "../models/auditionPost.mongoose.js";

async function createAuditionPost(body,author){
    return AuditionPostModel.create({
        ...body,
        author
    })
}

async function getAuditionPosts(){
    return AuditionPostModel.find();
}

async function getAuditionPost(id){
    return AuditionPostModel.findById(id);
}

async function updateAuditionPost(id, body){
    return AuditionPostModel.updateOne(
        { _id:id },
        body
    );
}

async function deleteAuditionPost(id){
    return AuditionPostModel.findByIdAndDelete(id);
}

export {
    createAuditionPost,
    getAuditionPosts,
    getAuditionPost,
    updateAuditionPost,
    deleteAuditionPost,
}
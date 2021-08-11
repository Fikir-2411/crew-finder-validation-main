import ApplicationModel from "../models/application.mongoose.js";

async function createApplication(body,applicantId){
    return ApplicationModel.create({
        ...body,
        applicantId
    })
}

async function getApplications(){
    return ApplicationModel.find();
}

async function getApplication(filter){
    return ApplicationModel.findOne(filter);
}

async function updateApplication(id, body){
    return ApplicationModel.updateOne(
        { _id:id },
        body
    );
}

async function deleteApplication(id){
    return ApplicationModel.findByIdAndDelete(id);
}

export {
    createApplication,
    getApplications,
    getApplication,
    updateApplication,
    deleteApplication,
}
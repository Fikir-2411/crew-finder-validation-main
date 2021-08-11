import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
    auditionPostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuditionPost',
        required: true,
    },
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    applicationLetter: {
        type: String,
        required: true,
    }, 
}, {
    timestamps: true,
})

const ApplicationModel = mongoose.model('Application', applicationSchema)

export default ApplicationModel
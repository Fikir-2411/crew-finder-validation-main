import mongoose from 'mongoose';
import { TALENT } from '../constants/enums.constants.js';
const auditionPostSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    talents: {
        type: String,
        enum: Object.values(TALENT),
    },  
    isAcceptingApplication: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
})

const AuditionPostModel = mongoose.model('AuditionPost', auditionPostSchema)

export default AuditionPostModel
import crypto from 'crypto';
import mongoose from 'mongoose';
import { GENDER, ROLE, TALENT, VERIFICATION } from '../constants/enums.constants.js';
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },    
    isActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(ROLE),
    },
    talent: {
        type: String,
        enum: Object.values(TALENT),
    },
    otherTalents: [
        {
            type: String,
            enum: Object.values(TALENT),
        }
    ],
    verification: {
        type: String,
        enum: Object.values(VERIFICATION),
    },
    birthDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: Object.values(GENDER),
    },
    address: {
        country: String,
        city: String,
    },
    phoneNumber: String,
    token: String,
    tokenExpiration: Date
}, {
    timestamps: true,
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
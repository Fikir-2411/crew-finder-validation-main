import { body,validationResult } from "express-validator";

const validateUser = [
    body('fullName').trim().isLength({min: 3}),
    body('username'),
    body('email'),
    body('password'),
    body('isActive'),
    body('role'),
    body('talent'),
    body('otherTalents'),
    body('verification'),
    body('phoneNumber'),
    body('resetPasswordToken'),
    body('resetPasswordExpiration'),
];


export default validateUser;
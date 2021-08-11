import { body,validationResult } from "express-validator";
import { ROLE,VERIFICATION,TALENT } from "../../constants/enums.constants.js"

const validateUser = [
    body('fullName').isString().trim().withMessage('Full name is need to be a String'),
    body('username').isString().withMessage('Username should be string').isLength({max: 6}).withMessage('Length of Username should be less than 6'),
    body('email').isEmail().normalizeEmail().toLowerCase().withMessage('Provide a valid email'),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Password should be minimum of 8 characters and include an Uppercase, a lowercase, a number and a character'),
    body('isActive').isBoolean().withMessage('isActive should be a boolean'),
    body('role').custom((value, req) => {
        const roles = Array(ROLE);
        console.log(roles);
        if(roles.has(value)){
            return true;
        }
        throw new Error('Role is unknown!');
    }).withMessage('Role does not existing!'),
    body('talent').custom((value, req) => {
        if(TALENT.has(value)){
            return true;
        }
        throw new Error('Talent is not defined!');
    }).withMessage('Talent does not exist!'),
    // body('otherTalents'),
    // body('verification'),
    // body('phoneNumber').isMobilePhone(),
    // body('resetPasswordToken'),
    // body('resetPasswordExpiration'),
];


export default validateUser;
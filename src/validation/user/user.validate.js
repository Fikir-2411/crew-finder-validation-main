import { body,validationResult } from "express-validator";
import { ROLE,VERIFICATION,TALENT } from "../../constants/enums.constants.js"

const validateUser = [
    body('fullName').isString().trim().withMessage('Full name is need to be a String'),
    body('username').isString().withMessage('Username should be string').isLength({max: 6}).withMessage('Length of Username should be less than 6'),
    body('email').isEmail().normalizeEmail().toLowerCase().withMessage('Provide a valid email'),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Password should be minimum of 8 characters and include an Uppercase, a lowercase, a number and a character'),
    body('isActive').isBoolean().withMessage('isActive should be a boolean'),
    body('role').custom((value, req) => {
        for (const [key, values] of Object.entries(ROLE)){
            if (values.match(value)){
                console.log(value);
                return true;
            }
        }
    }).withMessage('Role does not exist!'),
    body('talent').custom((value, req) => {
        for (const [key, values] of Object.entries(TALENT)){
            if (values.match(value)){
                console.log(value);
                return true;
            }
        }
    }).withMessage('Talent does not exist!'),
    // body('otherTalents'),
    body('verification').custom((value, req) => {
        for (const [key, values] of Object.entries(VERIFICATION)){
            if (values.match(value)){
                console.log(value);
                return true;
            }
        }
    }).withMessage('Verification does not exist!'),
    body('phoneNumber').isMobilePhone().withMessage('Provide valid phone number!'),
    // body('resetPasswordToken'),
    // body('resetPasswordExpiration'),
];


export default validateUser;
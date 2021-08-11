import { body,validationResult } from "express-validator";

const validateUser = [
    body('fullName').trim().isLength({min: 3}),
];


export default validateUser;
import { body } from "express-validator";

const validateApplicationLetter = [
    body('applicationLetter')
        .isString()
        .withMessage('Application Letter should be String')
        .isLength({min: 25, max: 500})
        .withMessage('Application Letter should be greater than 24 and less than 501'),
];

export default validateApplicationLetter;
import { body } from 'express-validator';
import { TALENT } from '../../constants/enums.constants.js';

const validateAuditionPost = [
    body('text')
        .isString()
        .withMessage('Text of Audition Post should be String!')
        .isLength({min: 10, max: 200})
        .withMessage('Audition Post text should range 10 - 200 characters!'),
    body('talents')
        .isString()
        .withMessage('Talent of Audition Post should be String!')
        .isIn(Object.values(TALENT))
        .withMessage('Talent is not found!'),
    body('isAcceptingApplication')
        .isBoolean()
        .withMessage('isAcceptingApplication should be a boolean'),
];

export default validateAuditionPost;
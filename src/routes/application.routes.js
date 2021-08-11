import { Router } from 'express';
import { httpCreateApplication, httpDeleteApplication, httpGetApplication, httpGetApplications, httpUpdateApplication } from '../controllers/application.controllers.js';
import { errorCatcher } from '../middlewares/error.js';
import { isAuthenticated } from '../middlewares/isAuthenticated..js';
import validateApplicationLetter from '../validation/application/application.validate.js';

const router = Router();

router.route('/')
        .post(validateApplicationLetter,
            errorCatcher(isAuthenticated),
            errorCatcher(httpCreateApplication)
        )
        .get(
            errorCatcher(isAuthenticated),
            errorCatcher(httpGetApplications)
        );

router.route('/:id')
        .get(
            errorCatcher(isAuthenticated),
            errorCatcher(httpGetApplication)
        )
        .put(validateApplicationLetter,
            errorCatcher(isAuthenticated),
            errorCatcher(httpUpdateApplication)
        )
        .delete(
            errorCatcher(isAuthenticated),
            errorCatcher(httpDeleteApplication)
        );

export default router; 
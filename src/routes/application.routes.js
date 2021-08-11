import { Router } from 'express';
import { httpCreateApplication, httpDeleteApplication, httpGetApplication, httpGetApplications, httpUpdateApplication } from '../controllers/application.controllers.js';
import { errorCatcher } from '../middlewares/error.js';
import { isAuthenticated } from '../middlewares/isAuthenticated..js';

const router = Router();

router.route('/')
        .post(
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
        .put(
            errorCatcher(isAuthenticated),
            errorCatcher(httpUpdateApplication)
        )
        .delete(
            errorCatcher(isAuthenticated),
            errorCatcher(httpDeleteApplication)
        );

export default router; 
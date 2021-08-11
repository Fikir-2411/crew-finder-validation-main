import { Router } from 'express';
import { httpCreateAuditionPost, httpDeleteAuditionPost, httpGetAuditionPost, httpGetAuditionPosts, httpUpdateAuditionPost } from '../controllers/auditionpost.controllers.js';
import { errorCatcher } from '../middlewares/error.js';
import { isAuthenticated } from '../middlewares/isAuthenticated..js';

const router = Router();

router.route('/')
        .post(
            errorCatcher(isAuthenticated),
            errorCatcher(httpCreateAuditionPost)
        )
        .get(
            errorCatcher(isAuthenticated),
            errorCatcher(httpGetAuditionPosts)
        );

router.route('/:id')
        .get(
            errorCatcher(isAuthenticated),
            errorCatcher(httpGetAuditionPost)
        )
        .put(
            errorCatcher(isAuthenticated),
            errorCatcher(httpUpdateAuditionPost)
        )
        .delete(
            errorCatcher(isAuthenticated),
            errorCatcher(httpDeleteAuditionPost)
        );

export default router; 
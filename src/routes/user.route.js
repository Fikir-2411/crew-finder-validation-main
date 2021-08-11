import { Router } from 'express';
import { httpForgotPassword, httpCreateUser, httpLoginUser, httpResetPassword, httpConfirmEmail } from '../controllers/user/auth.controllers.js';
import { httpDeleteUser, httpGetUsers } from '../controllers/user/user.contollers.js';
import { isDirectorOrProducer } from '../middlewares/elevatedRole.js';
import { errorCatcher } from '../middlewares/error.js';
const router = Router();

router.route('/').post(errorCatcher(httpCreateUser)).get(httpGetUsers);
router.route('/:id').delete(errorCatcher(httpDeleteUser));
router.route('/login').post(errorCatcher(httpLoginUser));
router.route("/forgotpassword").post(errorCatcher(httpForgotPassword));
router.route("/passwordreset/:resetToken").put(errorCatcher(httpResetPassword));
router.route("/confirm-email/:confirmToken").put(errorCatcher(httpConfirmEmail));

export default router;
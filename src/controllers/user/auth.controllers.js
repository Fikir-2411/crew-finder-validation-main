import { createUser, forgotPassword, resetPassword, loginUser, confirmEmail } from "../../services/user/auth.js";
import { generatePasswordHash } from "../../utils/hashpassword.js";
import { validationResult } from "express-validator";



async function httpCreateUser(req,res){

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        errors.array().forEach((error) => {
            return res.status(400).json(error.msg);
        })
        // return res.status(400).json("User validation failed!");
    }

    req.body.password = await generatePasswordHash(req.body.password);
    await createUser(req.body, req.headers.host);
    return res
            .status(201)
            .json("success");

}

async function httpLoginUser(req,res){

    return res
            .status(200)
            .json(await loginUser(req.body));

}


async function httpForgotPassword (req, res) {

    const { email } = req.body;
    return res
            .status(200)
            .json(await forgotPassword(email, req.headers.host));

  };
  
async function httpResetPassword(req, res) {

    return res
            .status(200)
            .json(await resetPassword(req.body.password, req.params.resetToken));

};

async function httpConfirmEmail(req, res) {

    return res
            .status(200)
            .json(await confirmEmail(req.params.confirmToken));

};


export {
    httpCreateUser,
    httpLoginUser,
    httpForgotPassword,
    httpResetPassword,
    httpConfirmEmail
}
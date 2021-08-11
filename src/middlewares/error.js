import { ErrorResponse } from "../utils/errorResponse.js";

function notFound(req,res,next){
    const error = new ErrorResponse(`Not Found - ${req.method} ${req.originalUrl}`, 404);
    next(error);
}

function errorCatcher(fn){
    return (req,res,next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    }
}

function errorHandler (err,_,res,next) {
    const statusCode = err.statusCode || 500;
    console.log(err);
    res.status(statusCode).json({
        message: err.message,
    });
}

export { 
    notFound, 
    errorCatcher,
    errorHandler
 }
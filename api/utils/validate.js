import { errorHandler } from "./error.js";

export const validateSignUp = (req, res, next) =>{
    const { username, email, password } = req.body;
    if(username === undefined || username == '')
        return next(errorHandler(501, 'missing field: Username'));
    else if(email === undefined || email == '')
        return next(errorHandler(501, 'missing field: Email'));
    else if(password === undefined || password == '')
        return next(errorHandler(501, 'missing field: Password'));
    else
        next();
}
export const validateSignIn = (req, res, next) =>{
    const { email, password } = req.body;
    if(email === undefined || email == '')
        return next(errorHandler(501, 'missing field: email'));
    else if(password === undefined || password == '')
        return next(errorHandler(501, 'missing field: Password'));
    else
        next();
}
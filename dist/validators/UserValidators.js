"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class UserValidators {
    static registerUserViaPhone() {
        return [
            (0, express_validator_1.query)("phone", "Phone Number is required").isString()
                .custom((phone, { req }) => {
                return User_1.default.findOne({
                    phone: phone,
                    type: 'user'
                })
                    .then((user) => {
                    if (user) {
                        req.user = user;
                        // throw new Error('User already exists');
                        //throw "User already exists";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            })
        ];
    }
    static otpLogin() {
        return [
            (0, express_validator_1.query)("phone", "Phone Number is required").isString(),
            (0, express_validator_1.query)("otp", "OTP is required").isNumeric()
        ];
    }
    static signup() {
        return [
            (0, express_validator_1.body)("name", "Name is required").isString(),
            (0, express_validator_1.body)("phone", "Phone number is required").isString(),
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                    //type: 'user'
                })
                    .then((user) => {
                    if (user) {
                        // throw new Error('User already exists');
                        throw "User already exists";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 20 })
                .withMessage("Password must be between 8-20 characters"),
            (0, express_validator_1.body)("type", "User role type is required").isString(),
            (0, express_validator_1.body)("status", "User status is required").isString()
        ];
    }
    static verifyUserEmailToken() {
        return [
            (0, express_validator_1.body)("verification_token", "Email verification token is required").isNumeric()
        ];
    }
    static login() {
        return [
            (0, express_validator_1.query)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                })
                    .then((user) => {
                    if (user) {
                        //check role
                        if (user.type == "user" || user.type == "admin" || user.type == 'store') {
                            req.user = user;
                            return true;
                        }
                        else {
                            // throw new Error('No user  registered with such email');
                            throw "You are not an Authorised User";
                        }
                    }
                    else {
                        // throw new Error('No user  registered with such email');
                        throw "No user  registered with such email";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.query)("password", "Password is required").isAlphanumeric()
        ];
    }
    static checkResetPasswordEmail() {
        return [
            (0, express_validator_1.query)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                })
                    .then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        // throw new Error('No user  registered with such email');
                        throw "No user  registered with such email";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            })
        ];
    }
    static verifyResetPasswordToken() {
        return [
            (0, express_validator_1.query)("email", "Email is required").isEmail(),
            (0, express_validator_1.query)("reset_password_token", "Reset password token is required")
                .isNumeric()
                .custom((reset_password_token, { req }) => {
                return User_1.default.findOne({
                    email: req.querry.email,
                    reset_password_token: reset_password_token,
                    reset_password_token_time: { $gt: Date.now() }
                })
                    .then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        // throw new Error('Reset password token doesn\'t exist. Please regenerate a new token.');
                        throw "Reset password token doesn't exist. Please regenerate a new token.";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            })
        ];
    }
    static resetPassword() {
        return [
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                })
                    .then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        // throw new Error('No user  registered with such email');
                        throw "No user  registered with such email";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("new_password", "New password is required").isAlphanumeric(),
            (0, express_validator_1.body)("otp", "Reset password token is required")
                .isNumeric()
                .custom((reset_password_token, { req }) => {
                if (req.user.reset_password_token == reset_password_token) {
                    return true;
                }
                else {
                    req.errorStatus = 422;
                    // throw new Error('Reset password token is invalid plese try again');
                    throw "Reset password token is invalid plese try again";
                }
            })
        ];
    }
    static verifyPhoneNumber() {
        return [(0, express_validator_1.body)("phone", "Phone is required").isString()];
    }
    static verifyUserProfile() {
        return [
            (0, express_validator_1.body)("phone", "Phone is required").isString(),
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                })
                    .then((user) => {
                    if (user) {
                        // throw new Error("A user with entered email already exist, please provide a unique email id");
                        throw "A user with entered email already exist, please provide a unique email id";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("password", "Password is required").isAlphanumeric()
        ];
    }
    // static checkRefreshToken() {
    //   return [
    //     body('refreshToken', 'RefreshToken is required').isString()
    //     .custom((refreshToken, {req}) => {
    //       if(refreshToken) {
    //         return true;
    //       } else {
    //         req.errorStatus = 403;
    //         // throw new Error("Access is forbidden");
    //         throw("Access is forbidden");
    //       }
    //     })
    //   ];
    // }
    static userProfilePic() {
        return [
            (0, express_validator_1.body)("profileImages", "Profile image is required")
                .custom((profileImage, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    // throw new Error('File not uploaded');
                    throw "File not uploaded";
                }
            })
        ];
    }
    static verifyCustomerProfile() {
        return [
            (0, express_validator_1.body)("name", "Name is required").isString(),
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                    type: 'user'
                })
                    .then((user) => {
                    if (user) {
                        // throw new Error("A user with entered email already exist, please provide a unique email id");
                        throw "A user with entered email already exist, please provide a unique email id";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            })
        ];
    }
}
exports.UserValidators = UserValidators;

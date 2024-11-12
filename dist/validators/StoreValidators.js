"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class StoreValidators {
    static addStore() {
        return [
            (0, express_validator_1.body)("name", "Owner Name is required").isString(),
            (0, express_validator_1.body)("email", "Email is required").isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email
                    //type: 'user'
                })
                    .then(user => {
                    if (user) {
                        // throw new Error('User already exists');
                        throw ("User already exists");
                    }
                    else {
                        return true;
                    }
                })
                    .catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("phone", "Phone Number is required").isString()
                .custom((phone, { req }) => {
                return User_1.default.findOne({
                    phone: phone,
                    type: 'store'
                })
                    .then(user => {
                    if (user) {
                        // throw new Error('User already exists');
                        throw ("User already exists");
                    }
                    else {
                        return true;
                    }
                })
                    .catch(e => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("password", "Password is required").isAlphanumeric()
                .isLength({ min: 8, max: 20 })
                .withMessage("Password must be between 8-20 characters"),
            // body("storeImages", "Cover image is required")
            // .custom((cover, {req}) => {
            //   if (req.file) {
            //     return true;
            //   } else {
            //     // throw new Error('File not uploaded');
            //     throw ("File not uploaded");
            //   }
            // }),
            (0, express_validator_1.body)("store_name", "Store Name is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isString(),
            (0, express_validator_1.body)("address", "Address is required").isString(),
            (0, express_validator_1.body)("location", "Location is required").isString(),
            (0, express_validator_1.body)("city_id", "City is required").isString()
        ];
    }
    static searchStores() {
        return [
            (0, express_validator_1.query)("name", "Search field is required").isString()
        ];
    }
}
exports.StoreValidators = StoreValidators;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemValidators = void 0;
const express_validator_1 = require("express-validator");
const Category_1 = require("../models/Category");
const Store_1 = require("../models/Store");
class ItemValidators {
    static addItem() {
        return [
            // body("itemImages", "Cover image is required").custom((cover, { req }) => {
            //   if (req.files) {
            //     return true;
            //   } else {
            //     // throw new Error('File not uploaded');
            //     throw "File not uploaded";
            //   }
            // }),
            (0, express_validator_1.body)("name", "Product Name is required").isString(),
            (0, express_validator_1.body)("store_id", "Store Id is required").isString()
                .custom((store_id, { req }) => {
                return Store_1.default.findById(store_id).then((store) => {
                    if (store) {
                        if (req.user.type == 'admin' || store.user_id == req.user.aud)
                            return true;
                        // throw new Error('You are not an Authorised user for this Store');
                        throw "You are not an Authorised user for this Store";
                    }
                    else {
                        // throw new Error('Store does not exist');
                        throw "Store does not exist";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("category_id", "Category Id is required").isString()
                .custom((category_id, { req }) => {
                return Category_1.default.findOne({
                    _id: category_id,
                    store_id: req.body.store_id
                }).then(category => {
                    if (category) {
                        // throw new Error('Category does not exist');
                        throw ("Category does not exist");
                    }
                    else {
                        return true;
                    }
                }).catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("price", "Price is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isBoolean()
        ];
    }
    static getProductsByCategory() {
        return [
            (0, express_validator_1.query)("category_id", "Category is required").isString()
        ];
    }
}
exports.ItemValidators = ItemValidators;

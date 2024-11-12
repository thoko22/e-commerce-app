"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidators = void 0;
const express_validator_1 = require("express-validator");
const Item_1 = require("../models/Item");
class OrderValidators {
    static placeOrder() {
        return [
            (0, express_validator_1.body)("products", "Products Items is required")
                .isString()
                .custom((products, { req }) => {
                if (req.user.type != "user") {
                    //throw new Error('You are not Authorised to place an order.');
                    throw "You are not Authorised to place an order.";
                }
                products = JSON.parse(products);
                const product_ids = products.map((x) => x._id);
                req.product_ids = product_ids;
                console.log(product_ids);
                return Item_1.default.find({ _id: { $in: [...product_ids] } })
                    .then((server_products) => {
                    if (!server_products ||
                        server_products.length != products.length) {
                        //throw new Error('Products mismatched!');
                        throw "Products mismatched!";
                    }
                    else {
                        req.server_products = server_products;
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("address", "Address is required").isString(),
            (0, express_validator_1.body)("status", "Order status is required").isString(),
            (0, express_validator_1.body)("payment_status", "Payment status is required").isBoolean(),
            (0, express_validator_1.body)("payment_mode", "Payment mode is required").isString(),
            (0, express_validator_1.body)("total", "Order Total is required")
                .isNumeric()
                .custom((total, { req }) => {
                let tot = 0;
                const server_products = req.server_products.map((server_product) => {
                    var _a;
                    console.log(server_product);
                    let products = JSON.parse(req.body.products);
                    let product = products.find((x) => x._id == server_product._id);
                    if (!product.quantity || product.quantity == 0) {
                        throw "Please provide a proper quantity for" + product.name;
                    }
                    console.log(product);
                    if (server_product.variations.length == 0) {
                        if (server_product.price != product.price) {
                            console.log("price mismatch");
                            throw ("Price mismatch! Check the latest price of" + product.name);
                        }
                        else if (product.quantity > server_product.stock_unit) {
                            throw ("Out of stock!" + product.name + "Just went out of stock!");
                        }
                        tot += server_product.price + parseFloat(product.quantity);
                        return server_product;
                    }
                    else {
                        let variation = server_product.variations.find((variation) => variation.sku && variation.sku == product.sku);
                        if (variation) {
                            if (variation.price != product.price) {
                                throw ("Price mismatch! Check the latest price of" + product.name);
                            }
                            else if (product.quantity > variation.stock_unit) {
                                throw ("Out of stock!" + product.name + "Just went out of stock!");
                            }
                            tot += variation.price * parseFloat(product.quantity);
                            return server_product;
                        }
                        else {
                            // let size = server_product.variations.map(x => x.size);
                            if (((_a = variation === null || variation === void 0 ? void 0 : variation.size) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                let data = variation.size.find((x) => x.sku && x.sku == product.sku);
                                if (data) {
                                    if (data.price != product.price) {
                                        throw ("Price mismatch! Check the latest price of" +
                                            product.name);
                                    }
                                    else if (product.quantity > data.stock_unit) {
                                        throw ("Out of stock!" +
                                            product.name +
                                            "Just went out of stock!");
                                    }
                                    tot += data.price * parseFloat(product.quantity);
                                    return server_product;
                                }
                            }
                            else {
                                throw "Products mismatched!";
                            }
                        }
                    }
                });
                console.log("total: ", tot);
                const grandTotal = tot + parseFloat(req.body.deliveryCharge);
                console.log("grand total: ", grandTotal);
                if (total != tot || req.body.grandTotal != grandTotal) {
                    console.log("throw error");
                    throw ("Amount to pay mismatch! Total amaount should be" + grandTotal);
                }
                else {
                    return true;
                }
            })
        ];
    }
}
exports.OrderValidators = OrderValidators;

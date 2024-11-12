"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidators = void 0;
const express_validator_1 = require("express-validator");
class CartValidators {
    static addToCart() {
        return [
            (0, express_validator_1.body)("products", "Products Items is required").isString(),
            (0, express_validator_1.body)("status", "Order status is required").isString(),
            (0, express_validator_1.body)("total", "Cart Total is required").isNumeric(),
            //   body("grandTotal", "Cart GrandTotal is required").isNumeric(),
            //   body("deliveryCharge", "Delivery Charge is required").isNumeric()
        ];
    }
}
exports.CartValidators = CartValidators;

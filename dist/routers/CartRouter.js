"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const CartController_1 = require("../controllers/CartController");
const CartValidators_1 = require("../validators/CartValidators");
class CartRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getCart', GlobalMiddleWare_1.GlobalMiddleWare.auth, CartController_1.CartController.getUserCart);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleWare_1.GlobalMiddleWare.auth, CartValidators_1.CartValidators.addToCart(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CartController_1.CartController.addToCart);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new CartRouter().router;

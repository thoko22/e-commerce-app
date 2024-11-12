"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const ItemController_1 = require("../controllers/ItemController");
const ItemValidators_1 = require("../validators/ItemValidators");
const Utils_1 = require("../utils/Utils");
class ItemRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getByCategory', GlobalMiddleWare_1.GlobalMiddleWare.auth, ItemValidators_1.ItemValidators.getProductsByCategory(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ItemController_1.ItemController.getProductsByCategory);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminOrStoreRole, new Utils_1.Utils().multer.array('productImages'), ItemValidators_1.ItemValidators.addItem(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ItemController_1.ItemController.addItem);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new ItemRouter().router;

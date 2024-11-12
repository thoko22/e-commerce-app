"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const StoreController_1 = require("../controllers/StoreController");
const StoreValidators_1 = require("../validators/StoreValidators");
const Utils_1 = require("../utils/Utils");
class StoreRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getStores', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, StoreController_1.StoreController.getStores);
        this.router.get('/getAllStores', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, StoreController_1.StoreController.getAllStores);
        this.router.get('/searchStores', GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, StoreValidators_1.StoreValidators.searchStores(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, StoreController_1.StoreController.searchStores);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single('storeImages'), StoreValidators_1.StoreValidators.addStore(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, StoreController_1.StoreController.addStore);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new StoreRouter().router;

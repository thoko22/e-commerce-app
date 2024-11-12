"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const CategoryController_1 = require("../controllers/CategoryController");
const CategoryValidators_1 = require("../validators/CategoryValidators");
const Utils_1 = require("../utils/Utils");
class CategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getCategories', GlobalMiddleWare_1.GlobalMiddleWare.auth, CategoryController_1.CategoryController.getCategories);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single('categoryImages'), CategoryValidators_1.CategoryValidators.addCategory(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CategoryController_1.CategoryController.addCategory);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new CategoryRouter().router;

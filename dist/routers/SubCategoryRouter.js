"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const SubCategoryController_1 = require("../controllers/SubCategoryController");
const SubCategoryValidators_1 = require("../validators/SubCategoryValidators");
class SubCategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/getSubCategories', GlobalMiddleWare_1.GlobalMiddleWare.auth, SubCategoryController_1.SubCategoryController.getSubCategories);
        this.router.get('/getSubCategories/:categoryId', GlobalMiddleWare_1.GlobalMiddleWare.auth, SubCategoryController_1.SubCategoryController.getSubCategoriesByCategory);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleWare_1.GlobalMiddleWare.auth, GlobalMiddleWare_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single('subCategoryImages'), SubCategoryValidators_1.SubCategoryValidators.addSubCategory(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, SubCategoryController_1.SubCategoryController.addSubCategory);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new SubCategoryRouter().router;

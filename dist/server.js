"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const environment_1 = require("./environments/environment");
const UserRouter_1 = require("./routers/UserRouter");
const BannerRouter_1 = require("./routers/BannerRouter");
const CityRouter_1 = require("./routers/CityRouter");
const CategoryRouter_1 = require("./routers/CategoryRouter");
const ItemRouter_1 = require("./routers/ItemRouter");
const AddressRouter_1 = require("./routers/AddressRouter");
const OrderRouter_1 = require("./routers/OrderRouter");
const Utils_1 = require("./utils/Utils");
const Redis_1 = require("./utils/Redis");
const SubCategoryRouter_1 = require("./routers/SubCategoryRouter");
const StoreRouter_1 = require("./routers/StoreRouter");
const CartRouter_1 = require("./routers/CartRouter");
class Server {
    constructor() {
        this.app = express();
        this.setConfigs();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfigs() {
        this.dotenvConfigs();
        this.connectMongoDB();
        this.connectRedis();
        this.allowCors();
        this.configureBodyParser();
    }
    dotenvConfigs() {
        Utils_1.Utils.dotenvConfigs();
    }
    connectMongoDB() {
        mongoose.connect((0, environment_1.getEnvironmentVariables)().db_uri).then(() => {
            console.log("Connected to mongodb.");
        });
    }
    connectRedis() {
        Redis_1.Redis.connectToRedis();
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // this.app.use(bodyParser.json());
    }
    allowCors() {
        this.app.use(cors());
    }
    setRoutes() {
        this.app.use("/src/uploads", express.static("src/uploads"));
        this.app.use("/api/user", UserRouter_1.default);
        this.app.use("/api/banner", BannerRouter_1.default);
        this.app.use("/api/city", CityRouter_1.default);
        this.app.use("/api/store", StoreRouter_1.default);
        this.app.use("/api/category", CategoryRouter_1.default);
        this.app.use("/api/sub_category", SubCategoryRouter_1.default);
        this.app.use("/api/product", ItemRouter_1.default);
        this.app.use("/api/address", AddressRouter_1.default);
        this.app.use("/api/cart", CartRouter_1.default);
        this.app.use("/api/order", OrderRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Not found",
                status_code: 404
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || "Something went wrong. Please try again",
                staus_code: errorStatus
            });
        });
    }
}
exports.Server = Server;

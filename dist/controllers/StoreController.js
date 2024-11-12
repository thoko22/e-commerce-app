"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const Store_1 = require("../models/Store");
const User_1 = require("../models/User");
const Utils_1 = require("../utils/Utils");
class StoreController {
    static addStore(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const store = req.body;
            //const path = req.file.path;
            const verification_token = Utils_1.Utils.generateVerificationToken();
            try {
                //create store user
                const hash = yield Utils_1.Utils.encryptPassword(store.password);
                const data = {
                    email: store.email,
                    verification_token,
                    verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                    phone: store.phone,
                    password: hash,
                    name: store.name,
                    type: "store",
                    status: "active"
                };
                const user = yield new User_1.default(data).save();
                //create store
                let store_data = {
                    name: store.store_name,
                    location: JSON.parse(store.location),
                    address: store.address,
                    status: store.status,
                    city_id: store.city_id,
                    user_id: user._id
                };
                if (req.file)
                    store_data = Object.assign(Object.assign({}, store_data), { cover: req.file.path });
                if (store.description)
                    store_data = Object.assign(Object.assign({}, store_data), { description: store.description });
                if (store.openTime)
                    store_data = Object.assign(Object.assign({}, store_data), { openTime: store.openTime });
                if (store.closeTime)
                    store_data = Object.assign(Object.assign({}, store_data), { closeTime: store.closeTime });
                const storeDoc = yield new Store_1.default(store_data).save();
                res.send(storeDoc);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getStores(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const EARTH_RADIUS_IN_KM = 6378.1;
            const data = req.query;
            const perPage = 10;
            const currentPage = parseInt(data.page) || 1;
            const prevPage = currentPage == 1 ? null : currentPage - 1;
            let nextPage = currentPage + 1;
            try {
                const stores_doc_count = yield Store_1.default.countDocuments({
                    status: "active",
                    location: {
                        //   $nearSphere: {
                        //   $geometry: {
                        //     type: "Point",
                        //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
                        //   },
                        //   $maxDistance: data.radius * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                (parseFloat(data.radius) / EARTH_RADIUS_IN_KM)
                            ]
                        }
                    }
                });
                // send empty array if no document on filter query exists
                if (!stores_doc_count) {
                    res.json({
                        stores: [],
                        perPage,
                        currentPage,
                        prevPage,
                        nextPage: null,
                        totalPages: 0
                        //totalRecords: stores_doc_count
                    });
                }
                const totalPages = Math.ceil(stores_doc_count / perPage);
                if (totalPages == 0 || totalPages == currentPage) {
                    nextPage = null;
                }
                if (totalPages < currentPage) {
                    //throw new Error('No more stores available');
                    throw "No more stores available";
                }
                const stores = yield Store_1.default.find({
                    status: "active",
                    location: {
                        //   $nearSphere: {
                        //   $geometry: {
                        //     type: "Point",
                        //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
                        //   },
                        //   $maxDistance: data.radius * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                })
                    .skip((currentPage * perPage) - perPage)
                    .limit(perPage);
                // res.send(stores);
                res.json({
                    stores,
                    perPage,
                    currentPage,
                    prevPage,
                    nextPage,
                    totalPages
                    //totalRecords: stores_doc_count
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static searchStores(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const EARTH_RADIUS_IN_KM = 6378.1;
            const data = req.query;
            const perPage = 10;
            const currentPage = parseInt(data.page) || 1;
            const prevPage = currentPage == 1 ? null : currentPage - 1;
            let nextPage = currentPage + 1;
            try {
                const stores_doc_count = yield Store_1.default.countDocuments({
                    //status: "active",
                    name: { $regex: data.name, $options: "i" },
                    location: {
                        //   $nearSphere: {
                        //   $geometry: {
                        //     type: "Point",
                        //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
                        //   },
                        //   $maxDistance: data.radius * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                });
                // send empty array if no document on filter query exists
                if (!stores_doc_count) {
                    res.json({
                        stores: [],
                        perPage,
                        currentPage,
                        prevPage,
                        nextPage: null,
                        totalPages: 0
                        //totalRecords: stores_doc_count
                    });
                }
                const totalPages = Math.ceil(stores_doc_count / perPage);
                if (totalPages == 0 || totalPages == currentPage) {
                    nextPage = null;
                }
                if (totalPages < currentPage) {
                    //throw new Error('No more stores available');
                    throw "No more stores available";
                }
                const stores = yield Store_1.default.find({
                    //status: "active",
                    name: { $regex: data.name, $options: "i" },
                    location: {
                        //   $nearSphere: {
                        //   $geometry: {
                        //     type: "Point",
                        //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
                        //   },
                        //   $maxDistance: data.radius * METERS_PER_KM
                        // }
                        $geoWithin: {
                            $centerSphere: [
                                [parseFloat(data.lng), parseFloat(data.lat)],
                                parseFloat(data.radius) / EARTH_RADIUS_IN_KM
                            ]
                        }
                    }
                })
                    .skip(currentPage * perPage - perPage)
                    .limit(perPage);
                // res.send(stores);
                res.json({
                    stores,
                    perPage,
                    currentPage,
                    prevPage,
                    nextPage,
                    totalPages
                    //totalRecords: stores_doc_count
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getAllStores(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stores = yield Store_1.default.find({
                    status: "active"
                });
                res.send(stores);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.StoreController = StoreController;

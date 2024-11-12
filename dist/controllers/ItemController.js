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
exports.ItemController = void 0;
const Item_1 = require("../models/Item");
class ItemController {
    static addItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemData = req.body;
            const files = req.files;
            try {
                //create item
                let item_data = {
                    name: itemData.name,
                    status: itemData.status,
                    price: parseInt(itemData.price),
                    category_id: itemData.category_id,
                    store_id: itemData.store_id,
                    //cover: path
                };
                if (itemData.description)
                    item_data = Object.assign(Object.assign({}, item_data), { description: itemData.description });
                if (itemData.specifications)
                    item_data = Object.assign(Object.assign({}, item_data), { specifications: itemData.specifications });
                if (itemData.sub_category_id)
                    item_data = Object.assign(Object.assign({}, item_data), { sub_category_id: itemData.sub_category_id });
                if (itemData.sku)
                    item_data = Object.assign(Object.assign({}, item_data), { sku: itemData.sku });
                if (itemData.price)
                    item_data = Object.assign(Object.assign({}, item_data), { price: itemData.price });
                if (itemData.stock_unit)
                    item_data = Object.assign(Object.assign({}, item_data), { stock_unit: itemData.stock_unit });
                if (itemData.variations)
                    item_data = Object.assign(Object.assign({}, item_data), { variations: itemData.variations });
                if (files) {
                    let images = [];
                    images = files.map(x => x.path);
                    item_data = Object.assign(Object.assign({}, item_data), { images });
                }
                const itemDoc = yield new Item_1.default(item_data).save();
                res.send(itemDoc);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getProductsByCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category_id = req.query.category_id;
                const sub_category_id = req.query.sub_category_id;
                let query = {
                    status: true,
                    category_id
                };
                if (sub_category_id) {
                    query = Object.assign(Object.assign({}, query), { sub_category_id });
                }
                const products = yield Item_1.default.find(query);
                res.json({
                    products
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ItemController = ItemController;

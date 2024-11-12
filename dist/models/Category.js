"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: false },
    status: { type: Boolean, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});
exports.default = (0, mongoose_1.model)("categories", categorySchema);

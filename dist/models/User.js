"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose.Schema({
    email: { type: String, required: false },
    account_verified: { type: Boolean, required: true, default: false },
    verification_token: { type: String, required: true },
    verification_token_time: { type: Date, required: true },
    phone: { type: String, required: true },
    photo: { type: String, required: false },
    password: { type: String, required: false },
    reset_password_token: { type: String, required: false },
    reset_password_token_time: { type: Date, required: false },
    name: { type: String, required: false },
    type: { type: String, required: true },
    status: { type: String, required: true },
    //uuid: [{type: String}],
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});
exports.default = (0, mongoose_1.model)("users", userSchema);

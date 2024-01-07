"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const user_interface_1 = require("../interface/user.interface");
const schema = new mongoose_1.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    fullname: { type: String },
    phone: { type: String },
    age: { type: Number },
    status: { type: String, default: user_interface_1.status.PENDING },
    role: { type: String, default: user_interface_1.role.USER },
    active: { type: Boolean, default: true },
}, { timestamps: true });
const usersModel = typegoose_1.mongoose.model('users', schema);
exports.usersModel = usersModel;

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
const uuid_1 = require("uuid");
const users_models_1 = require("../models/users.models");
const user_interface_1 = require("../interface/user.interface");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;
        const total = yield users_models_1.usersModel.countDocuments();
        const totalPages = Math.ceil(total / pageSize);
        const prevPage = page > 1 ? page - 1 : null;
        const nextPage = page < totalPages ? page + 1 : null;
        const hasNextPage = page < totalPages;
        const hasPrevPage = page > 1;
        const pagingCounter = (page - 1) * pageSize + 1;
        // const sortOrder: any = req.query.sort || 1;
        const listuser = yield users_models_1.usersModel
            .find()
            .select("-password")
            .skip(offset)
            .limit(pageSize)
            // .sort({ createdAt: sortOrder })
            .exec();
        res.status(200).json({
            data: { rows: listuser || [],
                total: total,
                totalPages: totalPages,
                page: page,
                pageSize: pageSize,
                pagingCounter: pagingCounter,
                hasPrevPage: hasPrevPage,
                hasNextPage: hasNextPage,
                prevPage: prevPage,
                nextPage: nextPage
            },
            code: 200,
            message: `sucess`,
        });
    }
    catch (err) {
        res.status(500).json({
            code: 500,
            message: err,
        });
    }
});
exports.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postData = req.body;
        const user = yield users_models_1.usersModel
            .findOne({ username: postData.username })
            .lean();
        if (user) {
            return res.status(400).send("User Already exists");
        }
        const saltRounds = 10;
        const salt = yield bcrypt.genSalt(saltRounds);
        postData.password = yield bcrypt.hash(postData.password, salt);
        postData.fullname = postData.firstname + " " + postData.lastname;
        postData.id = (0, uuid_1.v4)();
        const newUser = yield new users_models_1.usersModel(postData).save();
        const savedUser = yield newUser.save();
        res.status(201).json({
            message: "create-users",
            data: savedUser,
        });
    }
    catch (err) {
        res.status(500).json({
            code: 500,
            message: err,
        });
    }
});
exports.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateData = req.body;
        const id = req.params.id;
        const saltRounds = 10;
        const salt = yield bcrypt.genSalt(saltRounds);
        updateData.password = yield bcrypt.hash(updateData.password, salt);
        const userUpdate = yield users_models_1.usersModel.findOneAndUpdate({ id: id }, updateData, { new: true });
        res.status(200).json({
            // message: `update-users-${id}`,
            data: updateData,
            code: 200,
            message: `sucess`,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: "Server Error!!!",
        });
    }
});
exports.remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let updateActive = req.body;
        if (updateActive.active === false) {
            updateActive.active = true;
        }
        else {
            updateActive.active = false;
        }
        const userRemove = yield users_models_1.usersModel.findOneAndUpdate({ id: id }, updateActive, { new: true });
        res.status(200).json({
            data: userRemove,
            code: 200,
            message: `sucess`,
        });
    }
    catch (err) {
        res.status(500).json({
            code: 500,
            message: err,
        });
    }
});
exports.active = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let updateActive = req.body;
        if (updateActive.status == "verify") {
            updateActive.status = user_interface_1.status.VERIFY;
        }
        if (updateActive.status == "Banned") {
            updateActive.status = user_interface_1.status.BANNED;
        }
        const userActive = yield users_models_1.usersModel.findOneAndUpdate({ id: id }, updateActive, { new: true });
        res.status(200).json({
            data: userActive,
            code: 200,
            message: `sucess`,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: "Server Error!!!",
        });
    }
});

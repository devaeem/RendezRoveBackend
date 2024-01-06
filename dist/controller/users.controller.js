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
exports.list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: 'list -users',
            data: 'list'
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: 'Server Error!!!'
        });
    }
});
exports.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posrData = req.body;
        res.status(200).json({
            message: 'create-users',
            data: posrData
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: 'Server Error!!!'
        });
    }
});
exports.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params;
        res.status(200).json({
            message: `update-users-${id}`,
            data: id
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: 'Server Error!!!'
        });
    }
});
exports.remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params;
        res.status(200).json({
            message: `delete-users-${id}`,
            data: id
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: 'Server Error!!!'
        });
    }
});
exports.active = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params;
        res.status(200).json({
            message: `active-users-${id}`,
            data: id
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
            data: 'Server Error!!!'
        });
    }
});

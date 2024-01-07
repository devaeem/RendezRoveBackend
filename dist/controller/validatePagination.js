"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePagination = void 0;
function validatePagination(req, res, next) {
    if (!req.query.page) {
        return res.status(422).send({
            name: "ValidationError",
            message: "Parameters validation error!",
            code: 422,
            type: "VALIDATION_ERROR",
            data: [
                {
                    type: "required",
                    message: "The 'page' field is required.",
                    field: "page",
                    action: "users.list",
                },
            ],
        });
    }
    if (!req.query.pageSize) {
        return res.status(422).send({
            name: "ValidationError",
            message: "Parameters validation error!",
            code: 422,
            type: "VALIDATION_ERROR",
            data: [
                {
                    type: "required",
                    message: "The 'pageSize' field is required.",
                    field: "pageSize", // แก้ไขจาก 'page' เป็น 'pageSize'
                    action: "users.list",
                },
            ],
        });
    }
    next();
}
exports.validatePagination = validatePagination;

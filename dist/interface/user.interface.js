"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = exports.status = void 0;
var status;
(function (status) {
    status["PENDING"] = "pending";
    status["UCONFIRMED"] = "not-confirmed";
    status["BANNED"] = "Banned";
    status["VERIFY"] = "verify";
})(status || (exports.status = status = {}));
var role;
(function (role) {
    role["ADMIN"] = "admin";
    role["USER"] = "user";
})(role || (exports.role = role = {}));

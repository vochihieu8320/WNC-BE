"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const product_route_1 = __importDefault(require("./product.route"));
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/product', product_route_1.default);
}
exports.default = route;

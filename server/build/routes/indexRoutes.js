"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        //Lo inicializamos y le damos un modificador para ser accedido desde cualquier parte de la clase
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //cada vez que un usuario entre a la ruta general se ejecutara el codigo del indexController
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
//solo exportamos el enrutador no toda la clase
exports.default = indexRoutes.router;

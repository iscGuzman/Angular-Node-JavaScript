"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        //Lo inicializamos y le damos un modificador para ser accedido desde cualquier parte de la clase
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta para ver todos los juegos
        this.router.get('/', gamesController_1.default.list);
        //ruta para ver todos los juegos
        this.router.get('/:id/:region', gamesController_1.default.getOne);
        //ruta para agregar juegos
        this.router.post('/', gamesController_1.default.create);
        //ruta para eliminar
        this.router.delete('/:id/:region', gamesController_1.default.delete);
        //ruta modificar juego
        this.router.put('/:id/:region', gamesController_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
//solo exportamos el enrutador no toda la clase
exports.default = gamesRoutes.router;

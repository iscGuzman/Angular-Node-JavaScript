"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            text: 'API is api/games'
        });
    }
}
//Exportamos toda la clase
exports.indexController = new IndexController();

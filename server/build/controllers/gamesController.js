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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * from games');
            res.json(games);
        });
    }
    //Este metodo es un metodo asincrono ya que tarda un poco en ejecutarse despues de los parametro le indicamos que estamos ejecutando una promesa pero que no devuelve nada
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({
                message: 'Game saved'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { region } = req.params;
            //const consulta = `UPDATE games set ${[req.body]} WHERE id = ${[id]} and region ='${[region]}'`;
            const games = yield database_1.default.query('UPDATE games set ? WHERE id = ? and region = ?', [req.body, id, region]);
            res.json({ message: "The game was updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { region } = req.params;
            const consulta = `DELETE FROM games WHERE id = ${[id]} and region = '${[region]}'`;
            console.log(consulta);
            const games = yield database_1.default.query(consulta);
            res.json({ message: "The game was Deleted" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { region } = req.params;
            const consulta = `SELECT * FROM games WHERE id = ${[id]} and region = '${[region]}'`;
            const games = yield database_1.default.query(consulta);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            else {
                res.status(404).json({ text: "The game doesn't exists" });
            }
            console.log(games);
            res.json({ text: "game not founded" });
        });
    }
}
const gamesController = new GamesController();
//Exportamos la instanciacion
exports.default = gamesController;

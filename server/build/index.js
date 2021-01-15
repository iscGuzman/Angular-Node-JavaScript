"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // si existe un puerto tomalo, sino ejecutalo en el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        //utilizar morgan nos ayudara a saber que peticiones se han realizado a nuestra app y el tiempo de respuesta (podremos ver los metodos del CRUD)
        this.app.use(morgan_1.default('dev'));
        //Vamos a poder pedir los datos a nuestro server
        this.app.use(cors_1.default());
        //para aceptar los formatos Json
        this.app.use(express_1.default.json());
        //sirve para aceptar datos desde un formulario HTML
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        //para otra tabla generaria otra aqui y otro Routes
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

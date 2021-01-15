import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';


import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    public app: Application;
    
    constructor (){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        // si existe un puerto tomalo, sino ejecutalo en el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        //utilizar morgan nos ayudara a saber que peticiones se han realizado a nuestra app y el tiempo de respuesta (podremos ver los metodos del CRUD)
        this.app.use(morgan('dev'));
        //Vamos a poder pedir los datos a nuestro server
        this.app.use(cors());
        //para aceptar los formatos Json
        this.app.use(express.json());
        //sirve para aceptar datos desde un formulario HTML
        this.app.use(express.urlencoded({extended: false}));

    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        //para otra tabla generaria otra aqui y otro Routes
    }

    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`server on port`, this.app.get('port'));
        });
    }
}

const server =new Server();
server.start();
import {Router} from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
    
    //Lo inicializamos y le damos un modificador para ser accedido desde cualquier parte de la clase
    public router: Router = Router();

    constructor(){
        this.config();
    } 

    config(): void {
        //ruta para ver todos los juegos
        this.router.get('/', gamesController.list);

        //ruta para ver todos los juegos
        this.router.get('/:id/:region', gamesController.getOne);

        //ruta para agregar juegos
        this.router.post('/', gamesController.create);
        
        //ruta para eliminar
        this.router.delete('/:id/:region', gamesController.delete); 

        //ruta modificar juego
        this.router.put('/:id/:region', gamesController.update); 
    }

}

const gamesRoutes = new GamesRoutes();
//solo exportamos el enrutador no toda la clase
export default gamesRoutes.router;
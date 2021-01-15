import {Router} from 'express';

import {indexController} from '../controllers/indexController';

class IndexRoutes {
    
    //Lo inicializamos y le damos un modificador para ser accedido desde cualquier parte de la clase
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        //cada vez que un usuario entre a la ruta general se ejecutara el codigo del indexController
        this.router.get('/', indexController.index );
    }

}

const indexRoutes = new IndexRoutes();
//solo exportamos el enrutador no toda la clase
export default indexRoutes.router;
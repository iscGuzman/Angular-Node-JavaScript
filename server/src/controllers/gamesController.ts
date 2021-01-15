import {Request, Response} from 'express';
import pool from '../database';


class GamesController {

    public async list (req: Request ,res: Response): Promise<void>{

        const games = await pool.query('SELECT * from games');
        res.json(games);
    }


    //Este metodo es un metodo asincrono ya que tarda un poco en ejecutarse despues de los parametro le indicamos que estamos ejecutando una promesa pero que no devuelve nada
    public async create(req: Request, res: Response): Promise<void>{
        console.log(req.body);    
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({
            message: 'Game saved'
        });
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const { region } = req.params;
        //const consulta = `UPDATE games set ${[req.body]} WHERE id = ${[id]} and region ='${[region]}'`;
        const games = await pool.query('UPDATE games set ? WHERE id = ? and region = ?', [req.body, id, region]);
        res.json({message: "The game was updated"});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params; 
        const {region} = req.params;
        const consulta = `DELETE FROM games WHERE id = ${[id]} and region = '${[region]}'`;
        console.log(consulta);
        const games = await pool.query(consulta);
        res.json({message: "The game was Deleted"});
        
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { region } = req.params;
        const consulta = `SELECT * FROM games WHERE id = ${[id]} and region = '${[region]}'`;
        const games = await pool.query(consulta);
        if(games.length >0){
            return res.json(games[0]);
        }else{
            res.status(404).json({text: "The game doesn't exists"});
        }
        console.log(games);
        res.json({text: "game not founded"}); 

    }

}


const gamesController = new GamesController();

//Exportamos la instanciacion
export default gamesController;
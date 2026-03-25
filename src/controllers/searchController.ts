import { Request, Response } from 'express';
import { Pet } from '../models/pet'

export const search = (req: Request, res: Response) => {
	let query: string = req.query.q as string
	if(!query)
	res.send('Buscando.....');
	// res.render('pages/search');
}
import { NextFunction, Request, Response } from "express"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import AppError from "../errors/App.errors"

export const movieExists = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const MovieAlreadyExist: Movie | null = await AppDataSource.getRepository(Movie).findOneBy({name: req.body.name})

    if(MovieAlreadyExist){
        throw new AppError("Movie already exists.", 409)
    }
    
    res.locals = {...res, movie: MovieAlreadyExist}
    return next()
}
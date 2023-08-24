import { NextFunction, Request, Response } from "express"
import AppError from "../errors/App.errors"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"

export const idExist = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const foundMovie: Movie | null = await AppDataSource.getRepository(Movie).findOneBy({id: Number(req.params.id)})

    if(!foundMovie){
        throw new AppError("Movie not found", 404)
    }

    // res.locals = {...res, foundMovie}
    return next()
}
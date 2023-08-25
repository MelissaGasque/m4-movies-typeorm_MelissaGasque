import { NextFunction, Request, Response } from "express"
import { Pagination, PaginationParams } from '../interfaces/pagination.interfaces';

export const pagination = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const queryPage: number = Number(req.query.page) 
    const queryPerPage: number = Number(req.query.perPage) 

    const page: number = queryPage && queryPage > 1 ? queryPage : 1
    const perPage: number = queryPerPage && queryPerPage <= 5 && queryPage > 0 ? queryPerPage : 5
    
    const baseUrl: string = "http://localhost:3000/movies"
    const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    const paginationObj: PaginationParams = {
        page: perPage * (page -1),
        perPage,
        prevPage,
        nextPage
    }
  
    res.locals = {...res.locals, paginationObj}
    return next()
} 
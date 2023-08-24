import { NextFunction, Request, Response } from "express"
import { Pagination, PaginationParams } from '../interfaces/pagination.interfaces';

export const pagination = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const queryPage: number = Number(req.query.page) //offset
    const queryPerPage: number = Number(req.query.perPage) //limit

    const page: number = queryPage && queryPerPage > 1 ? queryPage : 1
    //Se o queryPage existir e queryPerPage for maior que 1, retorna o queryPage, caso contrário, retorna 1  1
    const perPage: number = queryPerPage && queryPerPage <= 5 && queryPage > 0 ? queryPerPage : 5
    //Se o queryPerPage existir, for menor ou igual a 5 e maior que zero, retorna o queryPage, caso contrário retorna 5. 5 é o maximo que a aplicação vai receber
    
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
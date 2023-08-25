import {  MovieRead } from "./movies.interface"

export type Pagination = {
    prevPage: string | null 
    nextPage: string | null 
    count: number  
    data: MovieRead  
}

export type PaginationParams = {
    page: number    
    perPage: number 
    prevPage: string | null
    nextPage: string | null
}
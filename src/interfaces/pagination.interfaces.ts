import { MovieInterface } from "./movies.interface"

export type Pagination = {
    prevPage: string | null //pagina anterior
    nextPage: string | null //Pagina posterior
    count: number   //quantidade de dados do banco de dados
    data: Array<MovieInterface>   //array dos produtos
}

export type PaginationParams = {
    page: number    //Parametros que vao vir na requisição
    perPage: number 
    prevPage: string | null
    nextPage: string | null
}
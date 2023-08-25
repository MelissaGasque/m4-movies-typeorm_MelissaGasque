import { Request, Response } from "express"
import { deleteMovieById, listAllRegisteredMovies, movieById, registerNewMovie } from "../services/movies.services"
import { Movie } from "../entities"
import { Pagination } from "../interfaces/pagination.interfaces"

//Cadastra um novo filme
export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await registerNewMovie(req.body)
  return res.status(201).json(movie)
}

//Lista todos os filmes cadastrados
export const readAllMovies = async (req: Request, res: Response): Promise<Response> => {
  const { paginationObj } = res.locals
  const movies: Pagination = await listAllRegisteredMovies(paginationObj) 
  return res.status(200).json(movies)
}

//Atualiza o filme passado por id
export const updateMovie  = async (req: Request, res: Response): Promise<Response> => {
    const movieId: number = Number(req.params.id)
    const updateMovie = req.body
    const movie: Movie | null = await movieById(movieId, updateMovie)
    return res.status(200).json(movie)
}

//Deleta o filme passado por id
export const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
    const movieId: number = Number(req.params.id)
    await deleteMovieById(movieId)
    return res.status(204).json()
}
  

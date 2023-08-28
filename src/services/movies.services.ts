import { DeepPartial, Repository } from "typeorm"
import { MovieInterface, MovieRead, MovieWithoutId } from "../interfaces/movies.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/App.errors";
import { Pagination, PaginationParams } from "../interfaces/pagination.interfaces";

//Cadastra um novo filme
export const registerNewMovie = async (payload: MovieWithoutId): Promise<MovieInterface> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movie: Movie = movieRepo.create(payload)
 
  await movieRepo.save(movie);

  return movie
}

//Lista todos os filmes cadastrados
export const listAllRegisteredMovies = async ({nextPage, page, perPage, prevPage, order, sort}: PaginationParams): Promise<Pagination> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const [movies, count] = await movieRepo.findAndCount({order:{[sort]:order}, skip:page, take:perPage})

 return {
  prevPage: page <=1 ? null : prevPage, //paginationParams.prevPage, 
  nextPage: count - page <= perPage ? null : nextPage,// paginationParams.nextPage,
  count, 
  data: movies,
 }
}

//Atualiza o filme passado por id
export const movieById = async (movieId: number, payload: DeepPartial<Movie>): Promise<Movie> => {
  const movieRepo: Repository<Movie> | null = AppDataSource.getRepository(Movie)

  const movieToUpdate = await movieRepo.findOneBy({ id: movieId })

  const updateMovie = await movieRepo.save({...movieToUpdate, ...payload})
   return updateMovie
}

//Deleta o filme passado por id
export const deleteMovieById = async (movieId: number): Promise<void> => {
  const movieRepo = AppDataSource.getRepository(Movie)
  const movieToDelete = await movieRepo.findOneBy({id: movieId})

  if(!movieToDelete){
    throw new AppError("Movie not found", 404)
  }
  
  await movieRepo.remove(movieToDelete)

}
import { DeepPartial, Repository } from "typeorm"
import { MovieInterface, MovieWithoutId } from "../interfaces/movies.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/App.errors";

//Cadastra um novo filme
export const registerNewMovie = async (payload: MovieWithoutId): Promise<MovieInterface> => {
  //Acima é adicionado as interfaces do corpo recebido e oq se espera dele
  //A baixo o Movie é referente a classe de entities
  //AppDataSource é referente a database
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
  //cria uma nova instancia da Entity
  const movie: Movie = movieRepo.create(payload)
  //Salva no banco de dados a instancia que acabou de ser criada com as informações do usuário
  await movieRepo.save(movie);

  return movie
}

//Lista todos os filmes cadastrados
export const listAllRegisteredMovies = async (): Promise<MovieInterface[]> => {
    //pega os dados que estão no repoistorio
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
  //por meio do find busca-se todos os dados que estão na tabela
  return await movieRepo.find()
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
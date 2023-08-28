import { DeepPartial } from 'typeorm';
import { z } from "zod"
import { movieSchema, movieWithoutId } from "../schema/movie.schema"
import { Movie } from "../entities"

type MovieInterface = z.infer<typeof movieSchema>
type MovieWithoutId = z.infer<typeof movieWithoutId>
type MovieRead = Array<Movie>
type ProductUpdateSchema = DeepPartial<Movie>


export { MovieInterface, MovieWithoutId, MovieRead, ProductUpdateSchema }
import { z } from "zod"
import { movieSchema, movieWithoutId } from "../schema/movie.schema"
import { Movie } from "../entities"

type MovieInterface = z.infer<typeof movieSchema>
type MovieWithoutId = z.infer<typeof movieWithoutId>
type MovieRead = Array<Movie>

export { MovieInterface, MovieWithoutId, MovieRead }
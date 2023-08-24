import { z } from "zod"
import { movieSchema, movieWithoutId } from "../schema/movie.schema"

type MovieInterface = z.infer<typeof movieSchema>
type MovieWithoutId = z.infer<typeof movieWithoutId>


export { MovieInterface, MovieWithoutId }
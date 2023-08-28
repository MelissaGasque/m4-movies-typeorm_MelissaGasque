import { Router } from "express"
import { createMovie, deleteMovie, readAllMovies, updateMovie } from "./controllers/controller"
import { idExist, movieExists, pagination, validateBody } from "./middlewares"
import { movieWithoutId, productUpdateSchema } from "./schema/movie.schema"

export const moviesRouter = Router()

moviesRouter.post("", validateBody(movieWithoutId), movieExists, createMovie)
moviesRouter.get("", pagination, readAllMovies)

moviesRouter.use("/:id", idExist)

moviesRouter.patch("/:id", validateBody(productUpdateSchema), updateMovie)
moviesRouter.delete("/:id", deleteMovie)

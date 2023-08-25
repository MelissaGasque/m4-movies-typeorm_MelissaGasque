import { Router, application } from "express"
import { createMovie, deleteMovie, readAllMovies, updateMovie } from "./controllers/controller"
import { idExist, movieExists, pagination, validateBody } from "./middlewares"
import { movieWithoutId } from "./schema/movie.schema"


export const moviesRouter = Router()

moviesRouter.post("", validateBody(movieWithoutId), movieExists, createMovie)
moviesRouter.get("", pagination, readAllMovies)

moviesRouter.use("/:id", idExist)

moviesRouter.patch("/:id", movieExists, updateMovie)
moviesRouter.delete("/:id", deleteMovie)

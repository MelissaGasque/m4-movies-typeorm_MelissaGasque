import "express-async-errors"
import express, { Application } from 'express'
import { moviesRouter } from './routes'
import { handleErrors } from './middlewares'

const app: Application = express()
app.use(express.json())

app.use("/movies", moviesRouter)

app.use(handleErrors)

export default app
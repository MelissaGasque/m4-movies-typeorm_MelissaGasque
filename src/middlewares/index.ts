import { pagination } from './pagination.middleware';
import { movieExists } from './movieAlreadyExists.middlewares';
import { idExist } from './idExists.middlewares';
import { handleErrors } from "./handleErrors"
import { validateBody } from "./validateBody"

export{ handleErrors, validateBody, idExist, movieExists, pagination}
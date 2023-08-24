import { z } from "zod"

export const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).nonempty(),
    description: z.string().nullish(), //nullish é usado para nulo e opcional
    duration: z.number().int(),
    price: z.number().int()
})

export const movieWithoutId = movieSchema.omit({id:true})
import { z } from "zod"

export const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).nonempty(),
    description: z.string().nullish(), 
    duration: z.number().int().positive(),
    price: z.number().int().positive()
})

export const movieWithoutId = movieSchema.omit({id:true})
export const productUpdateSchema = movieSchema.partial();
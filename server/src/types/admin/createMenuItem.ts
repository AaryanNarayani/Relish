import zod from 'zod'

export const createMenuItem = zod.object({
    name: zod.string().min(3),
    description: zod.string().min(3),
    price: zod.number().positive(),
});

import zod from 'zod';

export const updateMenuSchema = zod.object({
    name: zod.string().min(3).optional(),
    description: zod.string().min(3).optional(),
    price: zod.number().positive().optional(),
});

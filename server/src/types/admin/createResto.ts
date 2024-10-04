import zod from 'zod';
export const createRestoSchema = zod.object({
    name: zod.string().min(3),
    description: zod.string().optional(),
    address: zod.string().min(3),
    cuisine: zod.array(zod.string()).min(1),
});

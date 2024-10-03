import zod from 'zod';

const registerSchema = zod.object({
    name: zod.string().min(3),
    email: zod.string().email(),
    password: zod.string().min(6),
    address: zod.string().min(3).optional(),
});

export default registerSchema;

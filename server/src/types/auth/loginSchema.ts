import zod from 'zod';

const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

export default loginSchema;
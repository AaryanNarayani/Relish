import zod from 'zod';
export const verifySchema = zod.object({
    name: zod.string().min(3).max(50),
    phone: zod.string().min(10).max(10),
    otp: zod.string().length(4),
});
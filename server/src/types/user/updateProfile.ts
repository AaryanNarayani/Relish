import zod from 'zod'

export const updateProfile = zod.object({
    name: zod.string().min(3).optional(),
    email: zod.string().email().optional(),
    address: zod.string().min(3).optional(),
});

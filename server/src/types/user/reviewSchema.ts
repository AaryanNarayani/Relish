import zod from 'zod';
export const reviewSchema = zod.object({
    restaurantId: zod.number(),
    rating: zod.number().int().min(1).max(5),
    comment: zod.string().min(3).optional(),
});

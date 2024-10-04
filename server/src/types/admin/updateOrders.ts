import zod from 'zod'
export const updateOrders = zod.object({
    status: zod.string(),
});
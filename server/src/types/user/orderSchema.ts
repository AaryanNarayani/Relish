import { z } from 'zod';

export const orderSchema = z.object({
    restaurantId: z.number().int().positive(),
    items: z.array(
      z.object({
        menuItemId: z.number().int().positive(),
        quantity: z.number().int().positive(),
        price: z.number().positive(),
      })
    ),
});

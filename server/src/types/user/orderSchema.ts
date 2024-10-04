import { z } from 'zod';

/*
model Order {
  id           Int        @id @default(autoincrement())
  user         User       @relation(fields: [userId], references: [id])
  userId       Int
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  restaurantId Int
  items        OrderItem[]
  totalPrice   Decimal    @db.Decimal(10, 2)
  status       String     @default("placed")
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}

model OrderItem {
  id         Int      @id @default(autoincrement())
  order      Order    @relation(fields: [orderId], references: [id])
  orderId    Int
  menuItem   MenuItem @relation(fields: [menuItemId], references: [id])
  menuItemId Int
  quantity   Int
  price      Decimal  @db.Decimal(10, 2)
}
this is the order schema
make the zod object for this schema
*/
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

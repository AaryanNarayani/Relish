import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  try {
    if (!prisma) {
      prisma = new PrismaClient();
    }
  } catch (e) {
    console.log("Error Occured in creating Single ton Prisma Client");
    console.log(e);
  }
  return prisma!;
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function listTodos() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    return await prisma.todo.findMany()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }

}

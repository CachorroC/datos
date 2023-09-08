import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient(
  {
    log: [
      'info'
    ]
  }
);


async function connectDB() {
  try {
    await prisma.$connect();
    console.log(
      '? Database connected successfully'
    );
  } catch ( error ) {
    console.log(
      error
    );
    await prisma.$disconnect();
    process.exit(
      1
    );
  } finally {
    await prisma.$disconnect();
  }
}

export default connectDB;

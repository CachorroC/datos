import { PrismaClient } from '@prisma/client';

export declare const prisma: PrismaClient<
  {
    log: 'info'[];
  },
  never,
  import('@prisma/client/runtime/library').DefaultArgs
>;

declare function connectDB(): Promise<void>;
export default connectDB;

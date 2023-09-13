'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.prisma = void 0;
const client_1 = require('@prisma/client');
exports.prisma = new client_1.PrismaClient({
  log: ['info']
});
async function connectDB() {
  try {
    await exports.prisma.$connect();
    console.log(
      '? Database connected successfully'
    );
  } catch (error) {
    console.log(error);
    await exports.prisma.$disconnect();
    process.exit(1);
  } finally {
    await exports.prisma.$disconnect();
  }
}
exports.default = connectDB;

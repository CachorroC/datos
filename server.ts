import connecDB, { prisma } from './connectDB';

// ConnectDB
connecDB();

async function main() {
  // Insert a single user
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    }
  });
  console.log(JSON.stringify(user, undefined, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

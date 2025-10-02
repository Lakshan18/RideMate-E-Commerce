// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: { email: 'ravishka99@gmail.com', name: 'Ravishka Indrajith', password: 'Ravi123.' }
//   });
//   // ... more create calls
// }

// main()
//   .catch(e => { console.error(e); process.exit(1); })
//   .finally(async () => { await prisma.$disconnect(); });


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert test users
  const user1 = await prisma.user.create({
    data: {
      email: 'ravishka99@gmail.com',
      name: 'Ravishka Indrajith',
      mobile:'0771134212',
      password: '$2a$12$IYrVFhdQCyvQr/UX5LoAtOz2iCMksWkwSFEVmtNxGN/XlrP/LIXl6',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      name: 'Jane Smith',
      mobile:'0782993991',
      password: '$2a$12$dIPrnt0.cZEI9zGq42W5ZeZDDE1VERQz2xXfpHHJ66dqX0Xs4Xgiq',
    },
  });

  console.log({ user1, user2 });
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

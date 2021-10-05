const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const item1 = await prisma.item.upsert({
    where: { title: 'Milk' },
    update: {},
    create: {
      title: 'Milk',
      description: 'does a body good',
      numberOfItems: 1,
      isComplete: true,
    },
  });

  const item2 = await prisma.item.upsert({
    where: { title: 'Gummy Bears' },
    update: {},
    create: {
      title: 'Gummy Bears',
      description: 'get the Haribo brand gummies',
      numberOfItems: 3,
      isComplete: false,
    },
  });

  const item3 = await prisma.item.upsert({
    where: { title: 'Cheeze' },
    update: {},
    create: {
      title: 'Cheeze',
      description: 'need that chedda',
      numberOfItems: 1,
      isComplete: false,
    },
  });

  console.log('===SEEDING===... ', item1, item2, item3);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

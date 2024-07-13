import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publisher: 'Charles Scribner\'s Sons',
        publishedYear: 1925,
        description: 'A novel set in the Jazz Age that tells the tragic story of Jay Gatsby.',
        imageUrl: 'https://example.com/images/great-gatsby.jpg',
      },
      {
        title: '1984',
        author: 'George Orwell',
        publisher: 'Secker & Warburg',
        publishedYear: 1949,
        description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
        imageUrl: 'https://example.com/images/1984.jpg',
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publisher: 'J.B. Lippincott & Co.',
        publishedYear: 1960,
        description: 'A novel about the serious issues of rape and racial inequality told from the perspective of a child.',
        imageUrl: 'https://example.com/images/to-kill-a-mockingbird.jpg',
      },
    ],
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

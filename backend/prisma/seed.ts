import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';


const prisma = new PrismaClient();

const imageUrls = Array.from({ length: 200 }, (_, i) => `https://picsum.photos/200/300?random=${i + 1}`);

async function main() {
  const books = [];

  for (let i = 0; i < 200; i++) {
    books.push({
      title: faker.lorem.words(3),
      author: faker.person.fullName(),
      publisher: faker.company.name(),
      publishedYear: faker.date.past().getFullYear(),
      description: faker.lorem.sentences(5),
      imageUrl: imageUrls[i % imageUrls.length],
    });
  }

  await prisma.book.createMany({
    data: books,
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

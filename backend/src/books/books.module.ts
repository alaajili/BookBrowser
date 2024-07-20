import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BooksController],
  imports: [PrismaModule],
  providers: [BooksService],
})
export class BooksModule {}

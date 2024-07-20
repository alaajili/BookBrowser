import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {

  constructor(private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: createBookDto
    });
  }

  async findAll(skip: number, take: number) {
    const books = await this.prisma.book.findMany({
      skip,
      take,
    });
    const total = await this.prisma.book.count();
    return { books, total };
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id }
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id }
    });
  }
}

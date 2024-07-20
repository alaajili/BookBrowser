import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookEntity } from './entities/book.entity';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiCreatedResponse({ type: BookEntity})
  async create(@Body() createBookDto: CreateBookDto) {
    return new BookEntity(
      await this.booksService.create(createBookDto)
    );
  }

  @Get()
  @ApiOkResponse({ type: [BookEntity] })
  async findAll(
    @Query('skip', ParseIntPipe) skip = 0,
    @Query('take', ParseIntPipe) take = 10
  ) {
    const { books, total } = await this.booksService.findAll(skip, take);
    return { books: books.map((book) => new BookEntity(book)), total };
  }

  @Get(':id')
  @ApiOkResponse({ type: BookEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new BookEntity(
      await this.booksService.findOne(id)
    );
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: BookEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto) {
    return new BookEntity(
      await this.booksService.update(id, updateBookDto)
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: BookEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new BookEntity(
      await this.booksService.remove(id)
    );
  }
}

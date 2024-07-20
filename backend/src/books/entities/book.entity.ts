import { ApiProperty } from "@nestjs/swagger";
import { Book } from "@prisma/client";

export class BookEntity implements Book {
  constructor(partial: Partial<BookEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  publishedYear: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;
}

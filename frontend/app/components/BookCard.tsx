import React from 'react';
import { Book } from '../types';

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-600">
      <img src={book.imageUrl} alt={book.title} className="h-64 w-full" />
      <div className="p-4">
        <h3 className="font-bold text-xl">{book.title}</h3>
        <p className="text-gray-600 text-sm">By {book.author}</p>
        <p className="text-gray-600 text-sm">Published by {book.publisher}</p>
        <p className="text-gray-600 text-sm">Published on {book.publishedYear}</p>
      </div>
    </div>
  );
};

export default BookCard;

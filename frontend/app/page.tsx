'use client';

import Header from "./components/Header";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import { Book } from "./types";
import BookCard from "./components/BookCard";
import PaginationControls from "./components/PaginationControls";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of books per page

  useEffect(() => {
    const fetchBooks = async (page: number) => {
      const skip = (page - 1) * pageSize;
      const response = await fetch(`http://localhost:8000/books?skip=${skip}&take=${pageSize}`);
      const { books, total } = await response.json();
      setBooks(books);
      setTotalPages(Math.ceil(total / pageSize));
    };

    fetchBooks(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log(books)
  }, [books]);

  return (
    <main>
      <Header/>
      <Banner/>
      <section className="container mx-auto px-8">
        <h2 className="text-3xl font-bold my-8 underline">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard 
              key={book.id}
              book={book}/>
          ))}
        </div>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}

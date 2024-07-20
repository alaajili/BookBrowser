'use client';

import Header from "./components/Header";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import { Book } from "./types";
import BookCard from "./components/BookCard";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:8000/books");
      const books = await response.json();
      setBooks(books);
      // console.log(books);
    };

    fetchBooks();
  }, []);

  // useEffect(() => {
  //   console.log(books);
  // }, [books]);
    
  

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
      </section>
    </main>
  );
}

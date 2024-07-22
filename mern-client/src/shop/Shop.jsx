import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/all-books").then(res => res.json()).then(data => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-12">Explore Our Collection</h2>
      <div className="grid my-12 gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map(book => (
          <Card key={book._id} className="w-full h-full flex flex-col items-center text-center">
            <div className="relative w-full h-80">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="object-contain w-full h-full"
              />
            </div>
            <h5 className="text-xl font-bold mt-4">{book.bookTitle}</h5>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 mb-4 hover:bg-blue-600 transition-all duration-300">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={imageURL} alt={bookTitle} className="w-full h-auto max-h-[600px] object-cover mx-auto" />
      <h2 className="text-3xl font-bold mt-6 text-center">{bookTitle}</h2>
    </div>
  );
}

export default SingleBook;

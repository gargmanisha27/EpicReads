import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ManageBooks.css';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        alert("Book is Deleted Successfully!");
        setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      });
  };

  return (
    <div className='manage-books-container'>
      <h2 className='heading'>Manage Your Books</h2>
      
      <table className='books-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Edit or Manage</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td className='book-title'>{book.bookTitle}</td>
              <td>{book.authorName}</td>
              <td>{book.category}</td>
              <td>INR {book.price}</td>
              <td>
                <Link className="edit-link" to={`/admin/dashboard/edit-books/${book._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;

import React , {useEffect, useState} from 'react'
import BookCardNew from './BookCardNew';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5001/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        <BookCardNew books={books} headline="Staff Favorites" />
    </div>
  )
}

export default OtherBooks
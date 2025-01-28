import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>
        {
            fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        },[])
    return (
        <div className='max-w-[1200px] mx-auto mt-10'>
            <h3 className='text-5xl font-semibold text-center'>Books</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 '>
            {
                books.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
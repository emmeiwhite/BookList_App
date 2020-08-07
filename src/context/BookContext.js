import React, { createContext, useState } from 'react'
import uuid from 'uuid/dist/v1'

export const BookContext = createContext(); // This is our Context

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);

  // Add Book
  const addBook = (author, title) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  // Remove Book
  const removeBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
import React, { createContext, useReducer } from 'react'
import { bookReducer } from './../reducer/bookReducer';
import uuid from 'uuid/dist/v1'

export const BookContext = createContext(); // This is our Context

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
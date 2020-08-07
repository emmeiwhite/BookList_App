import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetail from './BookDetail'

export default function BookList() {
  const { books } = useContext(BookContext)
  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map(book => <BookDetail book={book} />)}
      </ul>
    </div>
  ) : (<div className="booklist">No more Books to read. Enjoy the time</div>)
}

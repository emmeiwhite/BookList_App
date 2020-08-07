import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export default function BookDetail({ book }) {
  const { removeBook } = useContext(BookContext)
  return (
    <li onClick={() => removeBook(book.id)}>
      <div>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
      </div>
    </li>
  )
}

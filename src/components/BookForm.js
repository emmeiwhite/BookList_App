import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

// Controlled Component without class
export default function BookForm() {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK', book: {
        title,
        author
      }
    });
    setTitle('')
    setAuthor('')
  }
  return (
    <div class="bookform">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter Author" value={author} required onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

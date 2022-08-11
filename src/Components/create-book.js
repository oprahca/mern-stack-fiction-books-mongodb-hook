import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';

export default function CreateTask() {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [published, setPublished] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const book_db = {
            name: name,
            author: author,
            genre: genre,
            published: published
        }

        axios.post('https://mern-mongodb-backend.oprahh.repl.co/books/add/',book_db)
        .then((res) => { window.location = '/' })
    }

    return (
    <div>
      <Navbar />

      <h3 className='my-2'>Create New Book</h3>
        <form onSubmit={onSubmit}>
            <div className='form-group my-3'>
            <label className='mb-2'>New Book Title Name: </label>
            <input type="text" required
            className='form-control' 
            name="name" value={name} 
            onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='form-group my-3'>
            <label className='mb-2'>New Book Author: </label>
            <input type="text" required
            className='form-control' 
            name="author" value={author} 
            onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className='form-group my-3'>
            <label className='mb-2'>New Book Genre: </label>
            <input type="text" required
            className='form-control' 
            name="genre" value={genre} 
            onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className='form-group my-3'>
            <label className='mb-2'>New Book Published Year: </label>
            <input type="number" required
            className='form-control' 
            name="published" value={published} 
            onChange={(e) => setPublished(e.target.value)} />
            </div>

            <div className="form-group">
                <input type="submit"
                value="Create A New Book"
                className="btn btn-dark" />
            </div>
        </form>
      </div>
    )
}
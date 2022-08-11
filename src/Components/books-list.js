import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './navbar';

const Book = (props) => (
  <tr>
    <td className="col">{props.book.name}</td>
    <td className="col">{props.book.author}</td>
    <td className="col">{props.book.genre}</td>
    <td className="col">{props.book.published}</td>
    <td className="col-2" style={{ textAlign: "right" }}>
      <button className="mx-2 btn btn-warning btn-sm" onClick={() => {
        props.editBook(props.keyt);
      }}>
        Edit
      </button>
      <button className="mx-2 btn btn-info btn-sm" onClick={() => {
        props.deleteBook(props.keyt);
      }}>
        Delete
      </button>
    </td>
  </tr>
)

export default function BookList() {
  const [book, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("https://mern-mongodb-backend.oprahh.repl.co/books")
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const editBook = (id) => {
    window.location = '/update/'+id;
  };

  const deleteBook = (id) => {
    axios
      .delete('https://mern-mongodb-backend.oprahh.repl.co/books/delete/'+id)
      .then((res) => console.log("Deleted:" + res.data))

    setBookList(book.filter((el) => el._id !== id));
  };

  return (
    <div>
      <Navbar />
      <h3 className="my-2">Fiction Books List</h3>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Genre</th>
            <th>Published Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            { book.map((currentBook) => (
                <Book 
                book={currentBook}
                key={currentBook._id} 
                keyt={currentBook._id}
                editBook={editBook} 
                deleteBook={deleteBook} />
            )) }
        </tbody>
      </table>
    </div>
  );
}
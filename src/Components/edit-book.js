import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

export default function EditBook() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [published, setPublished] = useState(0);

  useEffect(() => {
    axios
      .get(`https://mern-mongodb-backend.oprahh.repl.co/books/${id}`)
      .then((response) => {
        setName(response.data.name);
        setAuthor(response.data.author);
        setGenre(response.data.genre);
        setPublished(response.data.published);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const book_var = {
      name: name,
      author: author,
      genre: genre,
      published: published,
    };
    console.log(book_var);
    console.log(`https://mern-mongodb-backend.oprahh.repl.co/books/update/${id}`);

    axios
      .post(`https://mern-mongodb-backend.oprahh.repl.co/books/update/${id}`, book_var)
      .then((res) => {
        window.location = "/";
      });
  };

  return (
    <div>
      <Navbar />
      <h3 className="my-2">Edit The Task</h3>
      <form onSubmit={onSubmit}>
        <p>ID: <b>{id}</b></p>
        <div className="form-group my-3">
          <label className="mb-3">Book Title Name: </label>
          <input
            type="text"
            required
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label className="mb-2">Update Book Author: </label>
          <input
            type="text"
            required
            className="form-control"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label className="mb-2">Update Book Genre: </label>
          <input
            type="text"
            required
            className="form-control"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label className="mb-2">Update Book Published Year: </label>
          <input
            type="number"
            required
            className="form-control"
            name="published"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update Book"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

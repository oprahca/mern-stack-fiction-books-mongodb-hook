import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import BooksList from "./Components/books-list";
import EditBook from "./Components/edit-book";
import CreateBook from "./Components/create-book";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
        <Route path="/" exact  element={<BooksList />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/update/:id" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

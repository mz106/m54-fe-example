import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import { addBook } from "./utils/fetch";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5002/books/getAllBooks", {
        method: "GET",
        mode: "cors",
      });

      const data = await response.json();
      setBooks(data.books);
    })();
  }, [trigger]);

  const handleChange = (e, setter) => {
    setter(e.target.value);
    console.log(title);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    console.log("hello from add");
    const newBook = addBook(title, author, genre);
    //   setBooks([...books, newBook.book]);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="books-container">
        {books.map((book, index) => (
          <div className="book">
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
      <div className="user-panel">
        <div className="add-book">
          <form onSubmit={handleSubmitAdd}>
            <input
              placeholder="title"
              onChange={(e) => handleChange(e, setTitle)}
            />
            <input
              placeholder="author"
              onChange={(e) => handleChange(e, setAuthor)}
            />
            <input
              placeholder="genre"
              onChange={(e) => handleChange(e, setGenre)}
            />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="update-book">
          <form onSubmit={handleSubmitUpdate}>
            <input
              placeholder="title"
              onChange={(e) => handleChange(e, setTitle)}
            />
            <input
              placeholder="new author"
              onChange={(e) => handleChange(e, setAuthor)}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

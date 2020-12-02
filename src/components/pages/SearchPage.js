import React, { useState } from "react";

import Book from "../UI/Book";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [bookQuery, setBookQuery] = useState("");

  const onSearchBookSubmit = (e) => {
    e.preventDefault();
    const googleApiURL = `https://www.googleapis.com/books/v1/volumes?q=${bookQuery}`;

    setBooks([]);
    if (bookQuery !== "") {
      fetch(googleApiURL)
        .then((resp) => {
          return resp.json();
        })
        .then((books) => {
          if (!books.items) return;
          setBooks(books.items);
          setBookQuery("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>Hello, please enter text to search for books.</h1>
      <form onSubmit={onSearchBookSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={bookQuery}
          onChange={(e) => setBookQuery(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {books.length === 0
        ? null
        : books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={!book.volumeInfo.title ? "" : book.volumeInfo.title}
              subtitle={
                !book.volumeInfo.subtitle ? "" : book.volumeInfo.subtitle
              }
              description={
                !book.volumeInfo.description ? "" : book.volumeInfo.description
              }
              authors={!book.volumeInfo.authors ? [] : book.volumeInfo.authors}
              image={
                !book.volumeInfo.imageLinks
                  ? null
                  : book.volumeInfo.imageLinks.smallThumbnail
              }
            />
          ))}
    </div>
  );
};

export default SearchPage;

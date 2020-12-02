import React, { useEffect, useState } from "react";

const SavedBook = (props) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const googleApiURL = `https://www.googleapis.com/books/v1/volumes/${props.bookId}`;

    fetch(googleApiURL)
      .then((resp) => resp.json())
      .then((book) => {
        if (!book) return;
        if (book.volumeInfo.imageLinks) {
          setImage(book.volumeInfo.imageLinks.smallThumbnail);
        }
        setTitle(book.volumeInfo.title);
        setSubtitle(book.volumeInfo.subtitle);
        setDescription(book.volumeInfo.description);
        if (book.volumeInfo.authors) {
          setAuthors(book.volumeInfo.authors);
        }
      })
      .catch((err) => console.log(err));
  }, [props.bookId]);

  return (
    <div style={{ marginTop: 20, padding: 10, border: "2px solid #000" }}>
      <img src={image} alt="Book" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      {authors.length === 0
        ? null
        : authors.map((author, index) => <p key={index}>{author}</p>)}
    </div>
  );
};

export default SavedBook;
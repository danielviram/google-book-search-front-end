import React from "react";

const Book = (props) => {
  const onSaveBookClick = () => {
    const apiURL = "http://localhost:4000/api/v1/saves";

    const saveData = {
      bookId: props.id,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(saveData),
    };

    fetch(apiURL, reqObj)
      .then((resp) => resp.json())
      .then((save) => {
        console.log(save);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: 20, padding: 10, border: "2px solid #000" }}>
      <img src={props.image} alt="Book" />
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.description}</p>
      {props.authors.length === 0
        ? null
        : props.authors.map((author, index) => <p key={index}>{author}</p>)}
      <button onClick={onSaveBookClick}>Save</button>
    </div>
  );
};

export default Book;